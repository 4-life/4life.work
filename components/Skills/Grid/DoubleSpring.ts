const max = 13;
const damp = 0.63;
const springiness = 0.369;

export default class DoubleSpring {
  private ax = 0;
  private dx = 0;
  private ay = 0;
  private dy = 0;
  public tx = 0;
  public ty = 0;
  public x = 0;
  public y = 0;

  constructor() {
    this.x = 0;
    this.ax = 0;
    this.dx = 0;
    this.tx = 0;
    this.y = 0;
    this.ay = 0;
    this.dy = 0;
    this.ty = 0;
  }

  public update(): void {
    this.ax = (this.tx - this.x) * springiness;
    this.dx += this.ax;
    this.dx *= damp;

    if (this.dx < -max) {
      this.dx = -max;
    } else if (this.dx > max) {
      this.dx = max;
    }

    this.x += this.dx;
    this.ay = (this.ty - this.y) * springiness;
    this.dy += this.ay;
    this.dy *= damp;

    if (this.dy < -max) {
      this.dy = -max;
    } else if (this.dy > max) {
      this.dy = max;
    }

    this.y += this.dy;
  }
}
