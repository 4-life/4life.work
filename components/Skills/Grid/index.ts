import { fadeIn, SOUNDS } from './utils';
import Trackpad from './Trackpad';
import Grid from './Grid';
import Viewer from './Viewer';
import SkillViewer from './SkillViewer';
import { database } from './globals';
import { SkillModel } from './model';

const { mouse, track, downTarget } = database;
let { skill } = database;

let resizeCount = 0;
let isLoaded = false;
let grid: Grid;
let isBrowseMode = false;
let canvas: HTMLCanvasElement;
let viewer: Viewer;
let trackpad: Trackpad;
let skillViewer: SkillViewer;
let isPauseGridRender = false;
let context: CanvasRenderingContext2D;

function showSkill(m: SkillModel): void {
  skill = m;
  SOUNDS.clickOpen.play();
  isBrowseMode = false;
  viewer.showSkill(m);
  trackpad.lock();
  window.TweenLite.to(trackpad, 0.5, {
    value: m.positionX,
    easingValue: m.positionX,
    valueY: m.positionY,
    easingValueY: m.positionY,
    ease: window.Sine.easeOut,
  });
  grid.centerOnSkill();
}

function onResize(): void {
  resizeCount = 0;
}

function onMouseDown(event: MouseEvent): void {
  event.preventDefault();
  downTarget.x = mouse.x;
  downTarget.y = mouse.y;
  if (!isBrowseMode) return;
  grid.down();
}

function onMouseUp(event: MouseEvent): void {
  event.preventDefault();
  if (!isBrowseMode) return;
  grid.up();
}

function onTouchStart(event: TouchEvent): void {
  event.preventDefault();
  mouse.x = event.touches[0].pageX + document.body.scrollLeft;
  mouse.y = event.touches[0].pageY + document.body.scrollTop;
  downTarget.x = mouse.x;
  downTarget.y = mouse.y;
  if (!isBrowseMode) return;
  if (!grid.firstTouch) {
    grid.firstTouch = true;
    SOUNDS.drag.play();
  }
  grid.down();
}

function onTouchEnd(event: TouchEvent): void {
  event.preventDefault();
  if (!isBrowseMode) return;
  grid.up();
}

function testDidMove(): void {
  const xdist = mouse.x - downTarget.x;
  const ydist = mouse.y - downTarget.y;
  const dist = xdist * xdist + ydist * ydist;
  if (dist > 30 * 30) {
    grid.didMove = true;
  }
}

function onTouchMove(event: TouchEvent): void {
  event.preventDefault();
  mouse.x = event.touches[0].pageX + document.body.scrollLeft;
  mouse.y = event.touches[0].pageY + document.body.scrollTop;
  testDidMove();
}

function onMouseMove(event: MouseEvent): void {
  mouse.x = event.clientX + document.body.scrollLeft;
  mouse.y = event.clientY + document.body.scrollTop;
  testDidMove();
}

function onGridStartComplete(): void {
  isBrowseMode = true;
  trackpad.unlock();
}

function onSquareReady(): void {
  skillViewer.show(skill);
}

function onSkillSelected(selectedSkill: SkillModel): void {
  showSkill(selectedSkill);
}

function onViewerShown(): void {
  if (skillViewer.isOpen) {
    isPauseGridRender = true;
  }
  grid.render(context);
  viewer.render(context);
}

function onViewerHidden(): void {
  trackpad.unlock();
  grid.unlock();
  isBrowseMode = true;
}

function hideSkill(): void {
  isPauseGridRender = false;
  viewer.hide();
}

function update(): void {
  resizeCount += 1;
  if (resizeCount === 20) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    grid.resize(w, h);
    viewer.resize(w, h);
    const halfW = w / 2;
    const halfH = h / 2;

    skillViewer.view.style.left = `${halfW - (halfW < 250 ? halfW : 250)}px`;
    skillViewer.view.style.top = `${halfH - (halfH < 250 ? halfH : 250)}px`;
    if (isPauseGridRender) {
      grid.render(context);
      viewer.render(context);
    }
  }

  if (isLoaded && isBrowseMode) {
    trackpad.update();
  }

  track.x = trackpad.value;
  track.y = trackpad.valueY;
  if (!isPauseGridRender) {
    grid.render(context);
    viewer.render(context);
  }
  requestAnimationFrame(update);
}

export default function init(el: HTMLDivElement | null): void {
  if (!el) {
    return;
  }
  onResize();
  window.addEventListener('resize', onResize);
  isLoaded = true;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  canvas = document.createElement('canvas');
  canvas.width = windowWidth;
  canvas.height = windowHeight;
  context = canvas.getContext('2d') as CanvasRenderingContext2D;
  canvas.style.position = 'absolute';
  canvas.style.top = '0px';
  canvas.style.left = '0px';
  canvas.style.cursor = 'pointer';
  el.appendChild(canvas);
  canvas.style.display = 'none';
  fadeIn(canvas);
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('touchstart', onTouchStart);
  canvas.addEventListener('touchend', onTouchEnd);
  canvas.addEventListener('touchmove', onTouchMove);
  grid = new Grid(windowWidth, windowHeight);
  grid.onSkillSelected = onSkillSelected;

  trackpad = new Trackpad(canvas);

  viewer = new Viewer(windowWidth, windowHeight);
  viewer.onShown = onViewerShown;
  viewer.onSquareReady = onSquareReady;
  viewer.onHidden = onViewerHidden;

  skillViewer = new SkillViewer(el);
  skillViewer.onClosePressed = hideSkill;
  isBrowseMode = false;

  onResize();
  resizeCount = 19;
  trackpad.lock();
  const startX = -2;
  const startY = -2;
  const wh = 250;
  trackpad.setPosition(windowWidth / 2 + startX * wh + wh / 2, windowHeight / 2 + startY * wh);
  grid.onStartComplete = onGridStartComplete;
  grid.startIntro();
  requestAnimationFrame(update);
}
