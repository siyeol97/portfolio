import LandingBackground from './LandingBackground';
import styles from './Landing.module.scss';
import { useEffect } from 'react';

export default function Landing() {
  useEffect(() => {
    const text = document.querySelector('h1');

    if (!text) {
      return;
    }

    const glitch = (element: HTMLHeadingElement) => {
      setInterval(() => {
        const degree = Math.random() * 20 - 10;
        const beforeTop = Math.random() * 100;
        const beforeBottom = Math.random() * 100;
        const afterTop = Math.random() * 100;
        const afterBottom = Math.random() * 100;

        element.style.setProperty('--degree', `${degree}deg`);
        element.style.setProperty('--bt', `${beforeTop}%`);
        element.style.setProperty('--at', `${afterTop}%`);
        element.style.setProperty('--bb', `${beforeBottom}%`);
        element.style.setProperty('--ab', `${afterBottom}%`);
      }, 100);
    };

    glitch(text);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.greeting}>
        <h1 data-text='Hello world!'>Hello world!</h1>
      </div>
      <LandingBackground />
    </section>
  );
}
