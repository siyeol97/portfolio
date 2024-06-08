export class Thunder {
  opacity: number;
  ctx: CanvasRenderingContext2D;

  constructor(ctx: CanvasRenderingContext2D) {
    this.opacity = 0;
    this.ctx = ctx;
  }

  draw() {
    const gradient = this.ctx.createLinearGradient(0, 0, 0, innerHeight);
    gradient.addColorStop(0, `rgba(66, 84, 99, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(18, 23, 27, ${this.opacity})`);
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, innerWidth, innerHeight);
  }

  animate() {
    if (this.opacity < 0) {
      return;
    }
    this.opacity -= 0.005;
    this.draw();
  }
}
