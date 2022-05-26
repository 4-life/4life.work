import { fadeIn, SOUNDS } from './utils';
import Trackpad from './Trackpad';
import Grid from './Grid';
import Viewer from './Viewer';
import SkillViewer from './SkillViewer';
import { database } from './globals';

const { mouse, track, downTarget } = database;
let { skill } = database;
const { TweenLite, Sine } = global as any;

let resizeCount = 0;
let loaded = false;
let grid: Grid;
let browseMode = false;
let canvas: HTMLCanvasElement;
let viewer: Viewer;
let trackpad: Trackpad;
let skillViewer: SkillViewer;
let pauseGridRender = false;
let context: CanvasRenderingContext2D;

function showSkill(m) {
  skill = m;
  SOUNDS.clickOpen.play();
  browseMode = false;
  viewer.showSkill(m);
  trackpad.lock();
  TweenLite.to(trackpad, 0.5, {
    value: m.positionX,
    easingValue: m.positionX,
    valueY: m.positionY,
    easingValueY: m.positionY,
    ease: Sine.easeOut,
  });
  grid.centerOnSkill();
}

function onResize() {
  resizeCount = 0;
}

function onMouseDown(event) {
  event.preventDefault();
  downTarget.x = mouse.x;
  downTarget.y = mouse.y;
  if (!browseMode) return;
  grid.down();
}

function onMouseUp(event) {
  event.preventDefault();
  if (!browseMode) return;
  grid.up();
}

function onTouchStart(event) {
  event.preventDefault();
  mouse.x = (event.pageX || event.touches[0].pageX) + document.body.scrollLeft;
  mouse.y = (event.pageY || event.touches[0].pageY) + document.body.scrollTop;
  downTarget.x = mouse.x;
  downTarget.y = mouse.y;
  if (!browseMode) return;
  if (!grid.firstTouch) {
    grid.firstTouch = true;
    SOUNDS.drag.play();
  }
  grid.down();
}

function onTouchEnd(event) {
  event.preventDefault();
  if (!browseMode) return;
  grid.up();
}

function testDidMove() {
  const xdist = mouse.x - downTarget.x;
  const ydist = mouse.y - downTarget.y;
  const dist = xdist * xdist + ydist * ydist;
  if (dist > 30 * 30) {
    grid.didMove = true;
  }
}

function onTouchMove(event) {
  event.preventDefault();
  mouse.x = (event.pageX || event.touches[0].pageX) + document.body.scrollLeft;
  mouse.y = (event.pageY || event.touches[0].pageY) + document.body.scrollTop;
  testDidMove();
}

function onMouseMove(event) {
  mouse.x = event.clientX + document.body.scrollLeft;
  mouse.y = event.clientY + document.body.scrollTop;
  testDidMove();
}

function onGridStartComplete() {
  browseMode = true;
  trackpad.unlock();
}

function onSquareReady() {
  skillViewer.show(skill);
}

function onSkillSelected(s) {
  showSkill(s);
}

function onViewerShown() {
  if (skillViewer.isOpen) {
    pauseGridRender = true;
  }
  grid.render(context);
  viewer.render(context);
}

function onViewerHidden() {
  trackpad.unlock();
  grid.unlock();
  browseMode = true;
}

function onSwapPressed() {
  pauseGridRender = false;
  viewer.swap();
}

function hideSkill() {
  pauseGridRender = false;
  viewer.hide();
}

function update() {
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
    if (pauseGridRender) {
      grid.render(context);
      viewer.render(context);
    }
  }

  if (loaded && browseMode) {
    trackpad.update();
  }

  track.x = trackpad.value;
  track.y = trackpad.valueY;
  if (!pauseGridRender) {
    grid.render(context);
    viewer.render(context);
  }
  requestAnimationFrame(update);
}

export default function init(el: HTMLDivElement | null) {
  if (!el) {
    return;
  }
  onResize();
  window.addEventListener('resize', onResize);
  loaded = true;
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
  skillViewer.onSwapPressed = onSwapPressed;
  browseMode = false;

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
