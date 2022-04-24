/* eslint-disable no-lonely-if */
export default class Gesturepad {
  private target: HTMLDivElement;
  private startPoint: { x: number; y: number };
  private endPoint: { x: number; y: number };
  private dragging: boolean = false;
  private onMouseDownBind: any;
  private onMouseUpBind: any;
  private onMouseMoveBind: any;
  public onClose: any;
  public onSwipe: any;

  constructor(target: HTMLDivElement) {
    this.target = target;
    this.startPoint = {
      x: 0,
      y: 0,
    };
    this.endPoint = {
      x: 0,
      y: 0,
    };
  }

  public enable() {
    this.onMouseDownBind = this.onMouseDown.bind(this);
    this.onMouseUpBind = this.onMouseUp.bind(this);
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    document.addEventListener('mousedown', this.onMouseDownBind);
    document.addEventListener('mouseup', this.onMouseUpBind);
    document.addEventListener('mousemove', this.onMouseMoveBind);
    document.addEventListener('touchstart', this.onMouseDownBind);
    document.addEventListener('touchend', this.onMouseUpBind);
    document.addEventListener('touchmove', this.onMouseMoveBind);
  }

  public disable() {
    document.removeEventListener('mousedown', this.onMouseDownBind);
    document.removeEventListener('mouseup', this.onMouseUpBind);
    document.removeEventListener('mousemove', this.onMouseMoveBind);
    document.removeEventListener('touchstart', this.onMouseDownBind);
    document.removeEventListener('touchend', this.onMouseUpBind);
    document.removeEventListener('touchmove', this.onMouseMoveBind);
  }

  private onMouseDown(event) {
    if (event) {
      event.preventDefault();
    }
    const rect = this.target.getBoundingClientRect();
    this.dragging = true;
    this.startPoint.x = event.pageX - rect.left;
    this.startPoint.y = event.pageY - rect.top;
    this.endPoint.x = event.pageX - rect.left;
    this.endPoint.y = event.pageY - rect.top;
  }

  private onMouseUp(event) {
    if (event) event.preventDefault();
    this.dragging = false;
    const xdist = this.endPoint.x - this.startPoint.x;
    const ydist = this.endPoint.y - this.startPoint.y;
    if (xdist * xdist + ydist * ydist < 30 * 30) {
      const padding = 40;
      let outside = true;
      if (this.endPoint.x > -padding && this.endPoint.x < 500 + padding) {
        if (this.endPoint.y > -padding && this.endPoint.y < 500 + padding) {
          outside = false;
        }
      }
      if (outside) {
        if (this.onClose) this.onClose();
      }
      return;
    }
    if (Math.abs(xdist) > Math.abs(ydist)) {
      if (xdist < 0) {
        if (this.onSwipe) this.onSwipe('LEFT');
      } else {
        if (this.onSwipe) this.onSwipe('RIGHT');
      }
    } else {
      if (ydist < 0) {
        if (this.onSwipe) this.onSwipe('UP');
      } else {
        if (this.onSwipe) this.onSwipe('DOWN');
      }
    }
    this.startPoint.x = this.endPoint.x;
    this.startPoint.y = this.endPoint.y;
  }

  private onMouseMove(event) {
    const rect = this.target.getBoundingClientRect();
    if (this.dragging) {
      this.endPoint.x = event.pageX - rect.left;
      this.endPoint.y = event.pageY - rect.top;
    }
  }
}
