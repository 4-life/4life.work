/* eslint-disable no-plusplus */
import model, { SkillModel } from './model';
import { PATH_IMAGES, SOUNDS } from './utils';
import DoubleSpring from './DoubleSpring';
import { database } from './globals';

const { TweenLite, Expo, Sine, Cubic } = global as any;
const { mouse, track } = database;

type Xy = { x: number; y: number };

interface Node {
  spring: DoubleSpring;
  alpha: number;
  color: string;
  image: HTMLImageElement;
  ratio: number;
  xHome: number;
  yHome: number;
  x: number;
  y: number;
  xid: number;
  yid: number;
  xReals: number;
  yReals: number;
  xReal: number;
  yReal: number;
  isStart?: boolean;
  scale: number;
  skill: SkillModel;
  alpha1: number;
  alpha2: number;
  count: number;
  down: boolean;
}

export default class Grid {
  private textCanvas: HTMLCanvasElement & { context?: CanvasRenderingContext2D };
  private padding: number;
  private camera: Xy;
  private squareWidth: number;
  private startZoom: number;
  private zoomRatio: number;
  private startFade: number;
  private colors: string[];
  private nodePool: Node[];
  private points: Node[];
  private start = true;
  private locked = true;
  private width: number = 0;
  private height: number = 0;
  private gridWidth: number = 0;
  private gridHeight: number = 0;
  private scale: number = 0;
  public onTransitionFinished: any;
  public onStartComplete: any;
  public onSkillSelected: any;
  public firstTouch: boolean = false;
  private overCell?: Node;
  public didMove = false;

  constructor(width, height) {
    this.padding = 1;
    this.textCanvas = document.createElement('canvas');
    this.textCanvas.width = 500;
    this.textCanvas.height = 100;
    this.textCanvas.context = this.textCanvas.getContext('2d') as CanvasRenderingContext2D;
    this.textCanvas.context.fillStyle = '#333333';
    this.textCanvas.context.fillRect(0, 0, this.textCanvas.width, this.textCanvas.height);
    this.camera = {
      x: 0,
      y: 0,
    };
    this.squareWidth = 250;
    this.nodePool = [];
    this.points = [];
    // eslint-disable-next-line prettier/prettier
    this.colors = ['#b494bb', '#a2b878', '#af98ad', '#d9d3c5', '#6ca86c', '#aea677', '#4fb4c6', '#80c6e8'];
    this.start = true;
    this.locked = true;
    this.startZoom = 5;
    this.resize(width, height);
    this.zoomRatio = 0;
    this.startFade = 0;
  }

  public resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.gridWidth = Math.ceil(this.width / this.squareWidth) + 2 + this.padding + 1;
    this.gridHeight = Math.ceil(this.height / this.squareWidth) + 2 + this.padding + 1;
    const totalPoints = this.gridWidth * this.gridHeight;
    for (let i = 0; i < this.points.length; i++) {
      this.nodePool.push(this.points[i]);
    }
    this.points = [];
    for (let i = 0; i < totalPoints; i++) {
      const node: Node = this.nodePool.pop() || {
        spring: new DoubleSpring(),
        alpha: 1,
        color: this.colors[Math.round(Math.random() * 25) % 2],
        image: new Image(),
        ratio: 0,
        x: 0,
        y: 0,
        xReals: 0,
        yReals: 0,
        xReal: 0,
        yReal: 0,
        scale: 0,
        xHome: 0,
        yHome: 0,
        alpha1: 0,
        alpha2: 0,
        count: 0,
        down: false,
        xid: 0,
        yid: 0,
        skill: model.content[0],
      };
      const xpos = i % this.gridWidth;
      const ypos = Math.floor(i / this.gridWidth);
      node.xHome = xpos;
      node.x = xpos;
      node.yHome = ypos;
      node.y = ypos;
      this.points.push(node);
    }
    this.scale = 1;
  }

  public startIntro() {
    TweenLite.to(this, 2, {
      startZoom: 1,
      ease: Expo.easeInOut,
      onComplete: this.onZoomedOut.bind(this),
    });
    TweenLite.to(this, 0.1, {
      startFade: 1,
      ease: Expo.easeInOut,
      delay: 2,
      onComplete: this.onTransitionFinished,
    });
  }

  private onZoomedOut() {
    this.start = false;
    this.locked = false;
    SOUNDS.drag.play();
    this.onStartComplete();
  }

  public render(context: CanvasRenderingContext2D) {
    context.save();
    const speedX = (track.x - this.camera.x) * 0.4;
    const speedY = (track.y - this.camera.y) * 0.4;
    const speed = Math.sqrt(speedY * speedY + speedX * speedX);
    let fakeX = Math.abs(speed);
    if (fakeX > 40) fakeX = 40;
    fakeX /= 40;
    fakeX *= 0.25;
    let vol = fakeX * 4;
    if (vol < 0.1) vol = 0;
    if (vol > 1) vol = 1;
    SOUNDS.drag.volume(vol);
    this.scale += (1 - fakeX - this.scale) * 0.1;
    if (this.start) {
      this.scale = this.startZoom;
      this.camera.x = track.x;
      this.camera.y = track.y;
    } else {
      this.camera.x += speedX;
      this.camera.y += speedY;
    }
    const scaleRatio = this.scale + (1 - this.scale) * this.zoomRatio;
    context.translate(this.width / 2, this.height / 2);
    context.scale(scaleRatio, scaleRatio);
    context.translate(-this.squareWidth * (this.padding + 1), -this.squareWidth * 1.5);
    context.translate(Math.floor(-this.width / 2), -Math.floor(this.height / 2));

    const totalX = this.squareWidth * this.gridWidth;
    const totalY = this.squareWidth * this.gridHeight;
    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      point.spring.update();
      let segmentXPosition = point.x * this.squareWidth + this.camera.x;
      let segmentYPosition = point.y * this.squareWidth + this.camera.y;
      let xid = Math.floor(segmentXPosition / totalX);
      xid *= this.gridWidth;
      xid -= point.x;
      let yid = Math.floor(segmentYPosition / totalY);
      yid *= this.gridHeight;
      yid -= point.y;
      if (point.xid !== xid || point.yid !== yid) {
        const skillId = Grid.getId(xid, yid);
        const skill = model.content[skillId];
        point.skill = skill;
        if (point.skill.scale) {
          point.scale = 1 - point.skill.scale;
        } else {
          point.scale = 0.2;
        }
        point.color = point.skill.color;
        point.isStart = false;
        if (xid === -3 && yid === -3) {
          point.isStart = true;
        }
        point.image.src = `${PATH_IMAGES}${point.skill.gridImage[0]}`;
      }
      point.xid = xid;
      point.yid = yid;
      segmentXPosition %= totalX;
      if (segmentXPosition < 0) segmentXPosition += totalX;
      segmentYPosition %= totalY;
      if (segmentYPosition < 0) segmentYPosition += totalY;
      point.xReal = segmentXPosition;
      point.yReal = segmentYPosition;
      point.xReals = segmentXPosition + point.spring.x * (1 - this.zoomRatio);
      point.yReals = segmentYPosition + point.spring.y * (1 - this.zoomRatio);
      point.spring.tx = point.xHome;
      point.spring.ty = point.yHome;
      context.fillStyle = 'black';
      context.globalAlpha = 1;
    }

    for (let i = 0; i < this.points.length; i++) {
      const point = this.points[i];
      if (
        point.xReal < (this.gridWidth - 1) * this.squareWidth &&
        point.yReal < (this.gridHeight - 1) * this.squareWidth
      ) {
        const topLeft = point;
        const topRight =
          this.points[
            this.gridWidth * (point.y % this.gridHeight) + ((point.x + 1) % this.gridWidth)
          ];
        const bottomRight =
          this.points[
            this.gridWidth * ((point.y + 1) % this.gridHeight) + ((point.x + 1) % this.gridWidth)
          ];
        const bottomLeft =
          this.points[
            this.gridWidth * ((point.y + 1) % this.gridHeight) + (point.x % this.gridWidth)
          ];

        context.globalAlpha = 1;
        if (point.isStart) context.globalAlpha = this.startFade;
        context.fillStyle = point.color;
        context.beginPath();
        context.moveTo(topLeft.xReals - 1, topLeft.yReals - 1);
        context.lineTo(topRight.xReals + 1, topRight.yReals - 1);
        context.lineTo(bottomRight.xReals + 1, bottomRight.yReals + 1);
        context.lineTo(bottomLeft.xReals - 1, bottomLeft.yReals + 1);
        context.closePath();
        context.fill();
        const centerPointX =
          (topLeft.xReals + topRight.xReals + bottomRight.xReals + bottomLeft.xReals) / 4;
        const centerPointY =
          (topLeft.yReals + topRight.yReals + bottomRight.yReals + bottomLeft.yReals) / 4;
        const averageWidth = topRight.xReals - topLeft.xReals;
        const averageWidth2 = bottomRight.xReals - bottomLeft.xReals;
        const averageWidth3 = averageWidth < averageWidth2 ? averageWidth : averageWidth2;
        const averageHeight = topLeft.yReals - bottomLeft.yReals;
        const averageHeight2 = topRight.yReals - bottomRight.yReals;
        const averageHeight3 = averageHeight > averageHeight2 ? averageHeight : averageHeight2;
        const { image } = point;
        let sizeX = (averageWidth3 / this.squareWidth) * 250;
        let sizeY = (averageHeight3 / this.squareWidth) * 250;
        if (sizeX < 0) sizeX *= -1;
        if (sizeY < 0) sizeY *= -1;
        let av1 = averageWidth2 / averageWidth;
        const av1W = averageWidth / averageWidth2;
        av1 = av1 > av1W ? av1 : av1W;
        let av2 = averageHeight / averageHeight2;
        const av2W = averageHeight2 / averageHeight;
        av2 = av2 > av2W ? av2 : av2W;
        context.fillStyle = '#333333';
        if (this.overCell !== point) {
          context.globalAlpha = 1;
          if (point.isStart) {
            context.globalAlpha = this.startFade;
            if (this.startFade < 1) {
              sizeX = 250;
              sizeY = 250;
            }
            context.drawImage(
              image,
              centerPointX - sizeX / 2,
              centerPointY - sizeY / 2,
              sizeX,
              sizeY,
            );
          } else {
            context.drawImage(
              image,
              centerPointX - sizeX / 2,
              centerPointY - sizeY / 2,
              sizeX,
              sizeY,
            );
          }
        } else {
          context.globalAlpha = 1;
          let scaleX = averageWidth3 / this.squareWidth;
          let scaleY = averageHeight3 / this.squareWidth;
          if (scaleX < 0) scaleX *= -1;
          if (scaleY < 0) scaleY *= -1;
          const averageTop = (topLeft.yReals + topRight.yReals) / 2;
          const { ratio } = point;
          const scale = 1 - ratio * 0.1;
          const imagePositionY = centerPointY - sizeY / 2;
          const imagePositionY2 = averageTop;
          const imagePositionYoutput = imagePositionY + (imagePositionY2 - imagePositionY) * ratio;
          const imageScale = 1 - ratio * point.scale;
          context.drawImage(
            image,
            centerPointX - (sizeX * imageScale) / 2,
            imagePositionYoutput,
            sizeX * imageScale,
            sizeY * imageScale,
          );
          context.globalAlpha = this.overCell.alpha1;
          context.drawImage(
            this.textCanvas,
            centerPointX - (250 / 2) * scaleX,
            averageTop + sizeY * scale - 45 * scaleY,
            250 * scaleX,
            50 * scaleY,
          );
          context.globalAlpha = this.overCell.alpha2;
        }
        context.fillStyle = '#463e40';
        context.globalAlpha = (av1 + av2) / 2 - 1;
        if (context.globalAlpha > 0) {
          context.beginPath();
          context.moveTo(topLeft.xReals - 1, topLeft.yReals - 1);
          context.lineTo(topRight.xReals + 1, topRight.yReals - 1);
          context.lineTo(bottomRight.xReals + 1, bottomRight.yReals + 1);
          context.lineTo(bottomLeft.xReals - 1, bottomLeft.yReals + 1);
          context.closePath();
          context.fill();
        }
      }
    }
    if (!this.locked) {
      const currentOver: Node = this.hittest();
      if (currentOver) {
        if (currentOver !== this.overCell) {
          this.overCell = currentOver;
          this.overCell.count = 0;
          this.overCell.ratio = 0;
          this.overCell.alpha1 = 0;
          this.overCell.alpha2 = 0;
        }
        this.overCell.count++;
        if (this.overCell.count === 2) {
          SOUNDS.rollOver.play();
          if (!this.textCanvas.context) {
            return;
          }
          this.textCanvas.context.fillStyle = 'green';
          this.textCanvas.context.clearRect(0, 0, this.textCanvas.width, this.textCanvas.height);
          this.textCanvas.context.textBaseline = 'top';
          this.textCanvas.context.font = '40pt Calibri, Helvetica, Arial, sans-serif';
          this.textCanvas.context.fillStyle = this.overCell.skill.textColor || '#ffffff';
          const { copy } = this.overCell.skill;
          const textWidth = this.textCanvas.context.measureText(copy).width;
          this.textCanvas.context.fillText(copy, this.textCanvas.width / 2 - textWidth / 2, 0);
          this.textCanvas.context.fillStyle = this.overCell.skill.textColor || '#ffffff';
          this.textCanvas.context.font = 'bold 16pt Calibri, Helvetica, Arial, sans-serif';
          this.textCanvas.context.globalAlpha = 1;
          TweenLite.to(this.overCell, 0.2, {
            ratio: 1,
            ease: Sine.easeInOut,
          });
          TweenLite.to(this.overCell, 0.1, {
            alpha1: 1,
            ease: Sine.easeInOut,
            delay: 0.1,
          });
          TweenLite.to(this.overCell, 0.3, {
            alpha2: 1,
            ease: Sine.easeInOut,
            delay: 0.2,
          });
        }
        this.overCell.alpha = 0.2;
        const growth = this.overCell.down && !this.didMove ? -30 : 40;
        const point = this.overCell;
        this.effectCell(point, growth);
      }
    }
    context.restore();
  }

  private effectCell(point, growth) {
    const topLeft = point;
    const topRight =
      this.points[this.gridWidth * (point.y % this.gridHeight) + ((point.x + 1) % this.gridWidth)];
    const bottomRight =
      this.points[
        this.gridWidth * ((point.y + 1) % this.gridHeight) + ((point.x + 1) % this.gridWidth)
      ];
    const bottomLeft =
      this.points[this.gridWidth * ((point.y + 1) % this.gridHeight) + (point.x % this.gridWidth)];
    topLeft.spring.tx = -growth;
    topLeft.spring.ty = -growth * 1.3;
    topRight.spring.tx = +growth * 1.3;
    topRight.spring.ty = -growth;
    bottomRight.spring.tx = +growth;
    bottomRight.spring.ty = +growth * 1.3;
    bottomLeft.spring.tx = -growth;
    bottomLeft.spring.ty = +growth;
  }

  public centerOnSkill() {
    this.locked = true;
    TweenLite.to(this, 0.4, {
      zoomRatio: 1,
      ease: Cubic.easeIn,
    });
    if (this.overCell) {
      this.overCell.ratio = 0;
      this.overCell.count = 0;
      this.overCell.alpha1 = 0;
      this.overCell.alpha2 = 0;
    }
  }

  public unlock() {
    this.locked = false;
    TweenLite.to(this, 0.2, {
      zoomRatio: 0,
    });
  }

  public down() {
    this.overCell = this.hittest();
    this.overCell.down = true;
    this.didMove = false;
    this.overCell.count = 0;
    this.overCell.ratio = 0;
    this.overCell.alpha1 = 0;
    this.overCell.alpha2 = 0;
  }

  private hittest(): Node {
    if (this.overCell) {
      const point = this.overCell;
      const topRight =
        this.points[
          this.gridWidth * (point.y % this.gridHeight) + ((point.x + 1) % this.gridWidth)
        ];
      const bottomRight =
        this.points[
          this.gridWidth * ((point.y + 1) % this.gridHeight) + ((point.x + 1) % this.gridWidth)
        ];
      const distX = topRight.xReal - point.xReal;
      const distY = bottomRight.yReal - point.yReal;
      const positionX = mouse.x - point.xReal + this.squareWidth * 2;
      const positionY = mouse.y - point.yReal + this.squareWidth * 1.5;
      if (positionX > 0 && positionX < distX && positionY > 0 && positionY < distY + 40) {
        return this.overCell;
      }
    }
    let gridPosX = Math.floor((mouse.x - this.camera.x) / this.squareWidth) + 2;
    let gridPosY =
      Math.floor((mouse.y - this.camera.y + this.squareWidth * 0.5) / this.squareWidth) + 1;
    gridPosX %= this.gridWidth;
    if (gridPosX < 0) gridPosX += this.gridWidth;
    gridPosY %= this.gridHeight;
    if (gridPosY < 0) gridPosY += this.gridHeight;
    return this.points[(gridPosY % this.gridHeight) * this.gridWidth + gridPosX];
  }

  public up() {
    if (!this.overCell) {
      return;
    }

    if (this.overCell.down) {
      this.overCell.down = false;
      if (!this.didMove) {
        let positionX = this.overCell.xid;
        if (positionX < -this.gridWidth) positionX += this.gridWidth;
        const positionY = this.overCell.yid;
        const point = this.overCell;
        const topLeft = point;
        const topRight =
          this.points[
            this.gridWidth * (point.y % this.gridHeight) + ((point.x + 1) % this.gridWidth)
          ];
        const bottomRight =
          this.points[
            this.gridWidth * ((point.y + 1) % this.gridHeight) + ((point.x + 1) % this.gridWidth)
          ];
        const bottomLeft =
          this.points[
            this.gridWidth * ((point.y + 1) % this.gridHeight) + (point.x % this.gridWidth)
          ];
        const offsetX = -this.width / 2 - this.squareWidth * (this.padding + 1);
        const offsetY = -this.height / 2 - this.squareWidth * 1.5;
        this.overCell.skill.corners = [
          {
            x: topLeft.xReals + offsetX,
            y: topLeft.yReals + offsetY,
          },
          {
            x: topRight.xReals + offsetX,
            y: topRight.yReals + offsetY,
          },
          {
            x: bottomRight.xReals + offsetX,
            y: bottomRight.yReals + offsetY,
          },
          {
            x: bottomLeft.xReals + offsetX,
            y: bottomLeft.yReals + offsetY,
          },
        ];

        this.overCell.skill.positionX =
          (positionX + 2 - 0.5) * this.squareWidth + this.width / 2 - this.squareWidth / 2 + 1;
        this.overCell.skill.positionY =
          (positionY + 1.5 - 0.5) * this.squareWidth + this.height / 2 - this.squareWidth / 2 + 1;
        this.overCell.skill.positionX = Math.floor(this.overCell.skill.positionX);
        this.overCell.skill.positionY = Math.floor(this.overCell.skill.positionY);
        if (this.overCell.y === 0) this.overCell.skill.positionY -= 2;
        if (this.overCell.x === 0) this.overCell.skill.positionX -= 1;
        this.overCell.skill.color = point.color;
        this.overCell.skill.image = point.image;
        this.onSkillSelected(this.overCell.skill);
      }
    }
  }

  public static getId(xid, yid) {
    const gridWidth = 5;
    const gridHeight = 5;
    let modX = (xid - 4) % gridWidth;
    if (modX < 0) modX += gridWidth;
    let modY = (yid - 3) % gridHeight;
    if (modY < 0) modY += gridHeight;
    let id = model.layout[modY * gridWidth + modX];
    if (id >= model.content.length) id++;
    let skillId = id % model.content.length;
    if (yid === 0) {
      if (skillId < 0) skillId += model.content.length;
    }
    return skillId;
  }
}
