/* eslint-disable no-bitwise */
/* eslint-disable no-param-reassign */
import { Howl } from 'howler';

export const PATH_SOUNDS = './sounds';
export const PATH_IMAGES = './images/';

export const SOUNDS = {
  clickOpen: new Howl({
    src: [`${PATH_SOUNDS}/clickOpen.mp3`, `${PATH_SOUNDS}/clickOpen.ogg`],
  }),
  clickClose: new Howl({
    src: [`${PATH_SOUNDS}/clickClose.mp3`, `${PATH_SOUNDS}/clickClose.ogg`],
  }),
  rollOver: new Howl({
    src: [`${PATH_SOUNDS}/rollover.mp3`, `${PATH_SOUNDS}/rollover.ogg`],
    volume: 0.5,
  }),
  drag: new Howl({
    src: [`${PATH_SOUNDS}/dragGrid.mp3`, `${PATH_SOUNDS}/dragGrid.ogg`],
    loop: true,
  }),
};

export function fadeOut(el: HTMLElement) {
  let opacity = 1;

  const timer = setInterval(() => {
    if (opacity <= 0.1) {
      clearInterval(timer);
      el.style.display = 'none';
    }

    el.style.opacity = `${opacity}`;
    opacity -= opacity * 0.1;
  }, 10);
}

export function fadeIn(el: HTMLElement) {
  let opacity = 0.01;

  el.style.display = 'block';

  const timer = setInterval(() => {
    if (opacity >= 1) {
      clearInterval(timer);
    }

    el.style.opacity = `${opacity}`;
    opacity += opacity * 0.1;
  }, 10);
}
