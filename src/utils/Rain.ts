import { RainDrop } from './RainDrop';
import { Thunder } from './Thunder';
import randomBetween from './randomBetween';

export class Rain {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
  drops: RainDrop[];
  mouse: {
    x: number;
    y: number;
    isActive: boolean;
  };

  constructor(
    x: number,
    y: number,
    velocity: { x: number; y: number },
    ctx: CanvasRenderingContext2D,
    drops: RainDrop[],
    mouse: {
      x: number;
      y: number;
      isActive: boolean;
    },
  ) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.ctx = ctx;
    this.drops = drops;
    this.mouse = mouse;
  }

  draw() {
    const { x, y, velocity, ctx } = this;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + velocity.x * 0.5, y + velocity.y * 2);
    ctx.strokeStyle = '#8899a6';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  splash() {
    for (let i = 0; i < 3; i++) {
      const velocity = {
        x: -this.velocity.x + randomBetween(-2, 2),
        y: -this.velocity.y + randomBetween(5, 10),
      };
      this.drops.push(new RainDrop(this.x, innerHeight, velocity, this.ctx));
    }
  }

  animate() {
    if (this.y > innerHeight) {
      this.splash();
      this.x = randomBetween(-innerWidth * 0.2, innerWidth * 1.2);
      this.y = -20;
    }

    this.velocity.x = this.mouse.isActive
      ? randomBetween(-1, 1) + (-innerWidth / 2 + this.mouse.x) / 150
      : randomBetween(-1, 1);

    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.draw();
  }
}

export const initRain = (
  total: number,
  rains: Rain[],
  drops: RainDrop[],
  thunder: Thunder,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  mouse: {
    x: number;
    y: number;
    isActive: boolean;
  },
) => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  total = Math.floor((innerHeight * innerWidth) / 15000);
  rains.length = 0;
  drops.length = 0;
  thunder = new Thunder(ctx);

  for (let i = 0; i < total; i++) {
    const x = randomBetween(0, innerWidth);
    const y = randomBetween(0, innerHeight);
    const velocity = {
      x: 0,
      y: randomBetween(11, 18),
    };
    rains.push(new Rain(x, y, velocity, ctx, drops, mouse));
  }
};

export const renderRain = (
  rains: Rain[],
  drops: RainDrop[],
  thunder: Thunder,
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  THUNDER_PERCENTAGE: number,
) => {
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < THUNDER_PERCENTAGE) {
      thunder.opacity = 1;
    }
    thunder.animate();
    rains.forEach((rain) => rain.animate());
    drops.forEach((drop, i) => {
      drop.animate();
      if (drop.y > innerHeight) {
        drops.splice(i, 1);
      }
    });

    window.requestAnimationFrame(render);
  };

  render();
};
