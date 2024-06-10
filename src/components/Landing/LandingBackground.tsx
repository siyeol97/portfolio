import { useEffect, useRef } from 'react';
import styles from './LandingBackground.module.scss';
import { Rain, initRain, renderRain } from '../../utils/Rain';
import { RainDrop } from '../../utils/RainDrop';
import { Thunder } from '../../utils/Thunder';

export default function LandingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const total = 0;
    const rains: Rain[] = [];
    const drops: RainDrop[] = [];
    const THUNDER_PERCENTAGE = 0.001;
    const mouse = { x: 0, y: 0, isActive: false };

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!ctx || !canvas) {
      return;
    }

    const thunder = new Thunder(ctx);
    initRain(total, rains, drops, thunder, canvas, ctx, mouse);
    renderRain(rains, drops, thunder, canvas, ctx, THUNDER_PERCENTAGE);

    window.addEventListener('resize', () =>
      initRain(total, rains, drops, thunder, canvas, ctx, mouse),
    );
    canvas.addEventListener('mouseenter', () => (mouse.isActive = true));
    canvas.addEventListener('mouseleave', () => (mouse.isActive = false));
    canvas.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    return window.removeEventListener('resize', () =>
      initRain(total, rains, drops, thunder, canvas, ctx, mouse),
    );
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.wrapper}
    />
  );
}
