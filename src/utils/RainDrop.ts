export class RainDrop {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
  gravity: number;

  constructor(
    x: number,
    y: number,
    velocity: { x: number; y: number },
    ctx: CanvasRenderingContext2D,
  ) {
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.ctx = ctx;
    this.gravity = 1;
  }

  draw() {
    const { x, y, ctx } = this;
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = '#8899a6';
    ctx.fill();
  }

  animate() {
    this.velocity.y += this.gravity;
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    this.draw();
  }
}
