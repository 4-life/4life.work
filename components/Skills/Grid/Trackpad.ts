export default class Trackpad {
  private target: HTMLCanvasElement;
  public easingValue: number;
  public value: number;
  public dragOffset: number;
  public speed: number;
  public prevPosition: number;
  public valueY: number;
  public easingValueY: number;
  public dragOffsetY: number;
  public speedY: number;
  public prevPositionY: number;
  public dragging: boolean;
  public locked: boolean = false;
  public onMouseMoveBind: any;
  public onMouseUpBind: any;

  constructor(target: HTMLCanvasElement) {
    this.target = target;
    this.value = 0;
    this.easingValue = 0;
    this.dragOffset = 0;
    this.dragging = false;
    this.speed = 0;
    this.prevPosition = 0;
    this.valueY = 0;
    this.easingValueY = 0;
    this.dragOffsetY = 0;
    this.speedY = 0;
    this.prevPositionY = 0;
    this.target.addEventListener('mousedown', this.onMouseDown.bind(this));
    // onmousewheel bug: https://github.com/microsoft/TypeScript/issues/30067
    // eslint-disable-next-line dot-notation
    this.target['onmousewheel'] = this.onMouseWheel.bind(this);
    this.target.ontouchstart = this.onTouchStart.bind(this);
    document.addEventListener('keydown', this.onArrow.bind(this));
  }

  public unlock() {
    this.locked = false;
    this.speed = 0;
    this.easingValue = this.value;
    this.target.focus();
  }

  public lock() {
    this.locked = true;
  }

  public update() {
    this.value = this.easingValue;
    this.valueY = this.easingValueY;
    if (this.dragging) {
      let newSpeed = this.easingValue - this.prevPosition;
      newSpeed *= 0.7;
      this.speed += (newSpeed - this.speed) * 0.5;
      this.prevPosition = this.easingValue;
      let newSpeedY = this.easingValueY - this.prevPositionY;
      newSpeedY *= 0.7;
      this.speedY += (newSpeedY - this.speedY) * 0.5;
      this.prevPositionY = this.easingValueY;
    } else {
      this.speed *= 0.95;
      this.easingValue += this.speed;
      this.speedY *= 0.95;
      this.easingValueY += this.speedY;
    }
  }

  private onArrow(event) {
    if (event.keyCode === 38) {
      this.speed = 4;
      return false;
    }

    if (event.keyCode === 40) {
      this.speed -= 4;
      return false;
    }

    return true;
  }

  public setPosition(value, valueY) {
    this.value = value;
    this.easingValue = value;
    this.valueY = valueY;
    this.easingValueY = valueY;
  }

  private onMouseWheel(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      // eslint-disable-next-line no-param-reassign
      event.returnValue = false;
    }
    if (this.locked) return;
    this.speed = event.wheelDeltaX * 0.15;
    this.speedY = event.wheelDeltaY * 0.15;
  }

  private startDrag(newPosition, newPositionY) {
    if (this.locked) return;
    this.dragging = true;
    this.dragOffset = newPosition - this.value;
    this.dragOffsetY = newPositionY - this.valueY;
  }

  private endDrag() {
    if (this.locked) return;
    this.dragging = false;
  }

  private updateDrag(newPositionX, newPositionY) {
    if (this.locked) return;
    this.easingValue = newPositionX - this.dragOffset;
    this.easingValueY = newPositionY - this.dragOffsetY;
  }

  private onMouseDown(event) {
    if (event.preventDefault) {
      event.preventDefault();
    }
    // eslint-disable-next-line no-param-reassign
    event.returnValue = false;
    this.onMouseMoveBind = this.onMouseMove.bind(this);
    this.onMouseUpBind = this.onMouseUp.bind(this);
    document.addEventListener('mousemove', this.onMouseMoveBind);
    document.addEventListener('mouseup', this.onMouseUpBind);
    this.startDrag(event.pageX, event.pageY);
  }

  private onMouseMove(event) {
    if (event) event.preventDefault();
    this.updateDrag(event.pageX, event.pageY);
  }

  private onMouseUp() {
    document.removeEventListener('mousemove', this.onMouseMoveBind);
    document.removeEventListener('mouseup', this.onMouseUpBind);
    this.endDrag();
  }

  private onTouchStart(event) {
    this.target.ontouchmove = this.onTouchMove.bind(this);
    this.target.ontouchend = this.onTouchEnd.bind(this);
    this.startDrag(event.touches[0].clientX, event.touches[0].clientY);
  }

  private onTouchMove(event) {
    event.preventDefault();
    this.updateDrag(event.touches[0].clientX, event.touches[0].clientY);
  }

  private onTouchEnd() {
    this.target.ontouchmove = null;
    this.target.ontouchend = null;
    this.endDrag();
  }
}
