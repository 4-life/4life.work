import { SkillModel } from './model';
import { PATH_IMAGES } from './utils';

const newSet = 100;

type Xy = { x: number; y: number };

export default class Viewer {
  private color: string;
  private width: number;
  private height: number;
  private topLeft: Xy;
  private topRight: Xy;
  private bottomRight: Xy;
  private bottomLeft: Xy;
  private socialSpring: Xy[];
  private skillSpring: Xy[];
  private alpha: number;
  private imageAlpha: number;
  private kickBack: HTMLImageElement;
  public onSquareReady: any;
  public onShown: any;
  public onHidden: any;
  public skill?: SkillModel;

  constructor(width: number, height: number) {
    this.color = '#463849';
    this.width = width;
    this.height = height;
    this.topLeft = {
      x: 0,
      y: 0,
    };
    this.topRight = {
      x: 0,
      y: 0,
    };
    this.bottomRight = {
      x: 0,
      y: 0,
    };
    this.bottomLeft = {
      x: 0,
      y: 0,
    };
    this.alpha = 1;
    this.imageAlpha = 1;
    this.kickBack = new Image();
    this.kickBack.src = `${PATH_IMAGES}animationShadow.png`;
    this.socialSpring = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];

    this.skillSpring = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
  }

  public render(context: CanvasRenderingContext2D) {
    if (!this.skill) return;
    context.save();
    context.translate(this.width / 2, this.height / 2);
    context.globalAlpha = this.alpha * (1 - this.imageAlpha);
    context.drawImage(this.kickBack, -518 / 2 - 4, -518 / 2 + 4);
    context.globalAlpha = this.alpha;
    context.fillStyle = this.color;
    context.beginPath();
    context.moveTo(this.topLeft.x, this.topLeft.y);
    context.lineTo(this.topRight.x, this.topRight.y);
    context.lineTo(this.bottomRight.x, this.bottomRight.y);
    context.lineTo(this.bottomLeft.x, this.bottomLeft.y);
    context.closePath();
    context.fill();
    const centerPointX =
      (this.topLeft.x + this.topRight.x + this.bottomRight.x + this.bottomLeft.x) / 4;
    const centerPointY =
      (this.topLeft.y + this.topRight.y + this.bottomRight.y + this.bottomLeft.y) / 4;
    const averageWidth = this.topRight.x - this.topLeft.x;
    const averageWidth2 = this.bottomRight.x - this.bottomLeft.x;
    const averageWidth3 = averageWidth < averageWidth2 ? averageWidth : averageWidth2;
    const averageHeight = this.topLeft.y - this.bottomLeft.y;
    const averageHeight2 = this.topRight.y - this.bottomRight.y;
    const averageHeight3 = averageHeight > averageHeight2 ? averageHeight : averageHeight2;
    const { image } = this.skill;
    if (image) {
      let sizeX = (averageWidth3 / 240) * image.width;
      let sizeY = (averageHeight3 / 240) * image.height;
      if (sizeX < 0) sizeX *= -1;
      if (sizeY < 0) sizeY *= -1;
      context.globalAlpha = this.imageAlpha * this.alpha;
      context.drawImage(image, centerPointX - sizeX / 2, centerPointY - sizeY / 2, sizeX, sizeY);
    }
    context.restore();
  }

  public resize(width, height) {
    this.width = width;
    this.height = height;
  }

  public showSkill(skill: SkillModel) {
    this.skill = skill;
    this.color = skill.color;
    this.alpha = 1;
    this.imageAlpha = 1;
    if (skill.corners) {
      this.topLeft.x = skill.corners[0].x;
      this.topLeft.y = skill.corners[0].y;
      this.topRight.x = skill.corners[1].x;
      this.topRight.y = skill.corners[1].y;
      this.bottomRight.x = skill.corners[2].x;
      this.bottomRight.y = skill.corners[2].y;
      this.bottomLeft.x = skill.corners[3].x;
      this.bottomLeft.y = skill.corners[3].y;
    }
    const speed = 0.8;
    let delays;
    if (skill.corners) {
      if (skill.corners[0].x < 0) {
        if (skill.corners[0].y < 0) {
          delays = [0.4, 0.3, 0.2, 0.1];
        } else {
          delays = [0, 0.1, 0.2, 0.3];
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (skill.corners[0].y < 0) {
          delays = [0.2, 0.3, 0, 0.1];
        } else {
          delays = [0.1, 0, 0.3, 0.2];
        }
      }
    } else {
      delays = [0, 0.1, 0.2, 0.3];
    }
    window.TweenLite.to(this.topLeft, 0.5 * speed, {
      x: -250,
      y: -250,
      ease: window.Back.easeOut,
      delay: delays[0],
    });
    window.TweenLite.to(this.topRight, 0.5 * speed, {
      x: 250,
      y: -250,
      ease: window.Back.easeOut,
      delay: delays[1] * speed,
    });
    window.TweenLite.to(this.bottomRight, 0.5 * speed, {
      x: 250,
      y: 250,
      ease: window.Back.easeOut,
      delay: delays[2] * speed,
    });
    window.TweenLite.to(this.bottomLeft, 0.5 * speed, {
      x: -250,
      y: 250,
      ease: window.Back.easeOut,
      delay: delays[3] * speed,
      onComplete: this.onSquareComplete.bind(this),
    });
    window.TweenLite.to(this.socialSpring[0], 0.5 * speed, {
      x: 250,
      y: -250 + 311 - 14 + newSet,
      ease: window.Elastic.easeOut,
      delay: 0.4 + 0,
    });
    window.TweenLite.to(this.socialSpring[1], 0.5 * speed, {
      x: 250 + 75,
      y: -250 + 311 + newSet,
      ease: window.Elastic.easeOut,
      delay: 0.4 + 0.1 * speed,
    });
    window.TweenLite.to(this.socialSpring[2], 0.5 * speed, {
      x: 250 + 75,
      y: -250 + 311 + 65 + newSet,
      ease: window.Elastic.easeOut,
      delay: 0.4 + 0.2 * speed,
    });
    window.TweenLite.to(this.socialSpring[3], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65 + newSet,
      ease: window.Elastic.easeOut,
      delay: 0.4 + 0.3 * speed,
    });
    window.TweenLite.to(this.skillSpring[0], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.7 + 0,
    });
    window.TweenLite.to(this.skillSpring[1], 0.5 * speed, {
      x: 250 + 75,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.7 + 0.1 * speed,
    });
    window.TweenLite.to(this.skillSpring[2], 0.5 * speed, {
      x: 250 + 75,
      y: -250 + 311 + 65 + 75,
      ease: window.Elastic.easeOut,
      delay: 0.7 + 0.2 * speed,
    });
    window.TweenLite.to(this.skillSpring[3], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65 + 75,
      ease: window.Elastic.easeOut,
      delay: 0.7 + 0.3 * speed,
      onComplete: this.onShown2.bind(this),
    });
    window.TweenLite.to(this, 0.5, {
      blackStrength: 0.75,
      ease: window.Sine.easeOut,
    });
    window.TweenLite.to(this, 0.25, {
      imageAlpha: 0,
      ease: window.Sine.easeOut,
      delay: 0.2,
    });
  }

  public swap() {
    const speed = 0.8;
    window.TweenLite.to(this.socialSpring[0], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0,
    });
    window.TweenLite.to(this.socialSpring[1], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0.1 * speed,
    });
    window.TweenLite.to(this.socialSpring[2], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0.2 * speed,
    });
    window.TweenLite.to(this.socialSpring[3], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0.3 * speed,
    });
    window.TweenLite.to(this.skillSpring[0], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0,
    });
    window.TweenLite.to(this.skillSpring[1], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.1 * speed,
    });
    window.TweenLite.to(this.skillSpring[2], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.2 * speed,
    });
    window.TweenLite.to(this.skillSpring[3], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.3 * speed,
      onComplete: this.onShown2.bind(this),
    });
    this.color = '#463849';
  }

  public hide() {
    const speed = 0.8;
    window.TweenLite.to(this.socialSpring[0], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0,
    });
    window.TweenLite.to(this.socialSpring[1], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0.1 * speed,
    });
    window.TweenLite.to(this.socialSpring[2], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0.2 * speed,
    });
    window.TweenLite.to(this.socialSpring[3], 0.5 * speed, {
      x: 250,
      y: -250 + 311,
      ease: window.Elastic.easeOut,
      delay: 0.3 * speed,
    });
    window.TweenLite.to(this.skillSpring[0], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0,
    });
    window.TweenLite.to(this.skillSpring[1], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.1 * speed,
    });
    window.TweenLite.to(this.skillSpring[2], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.2 * speed,
    });
    window.TweenLite.to(this.skillSpring[3], 0.5 * speed, {
      x: 250,
      y: -250 + 311 + 65,
      ease: window.Elastic.easeOut,
      delay: 0.3 * speed,
    });
    window.TweenLite.to(this, 0.5, {
      blackStrength: 0,
      imageAlpha: 1,
      ease: window.Sine.easeOut,
    });
    window.TweenLite.to(this.topLeft, 0.5 * speed, {
      x: -250,
      y: -250,
      ease: window.Back.easeOut,
      delay: 0,
    });
    window.TweenLite.to(this.topRight, 0.5 * speed, {
      x: -0,
      y: -250,
      ease: window.Back.easeOut,
      delay: 0.1 * speed,
    });
    window.TweenLite.to(this.bottomRight, 0.5 * speed, {
      x: -0,
      y: -0,
      ease: window.Back.easeOut,
      delay: 0.2 * speed,
    });
    window.TweenLite.to(this.bottomLeft, 0.5 * speed, {
      x: -250,
      y: -0,
      ease: window.Back.easeOut,
      delay: 0.3 * speed,
      onComplete: this.onHidden2.bind(this),
    });
  }

  private onSquareComplete() {
    this.onSquareReady();
  }

  private onShown2() {
    this.onShown();
  }

  private onHidden2() {
    this.skill = undefined;
    this.onHidden();
  }
}
