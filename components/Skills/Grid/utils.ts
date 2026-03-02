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

export function fadeOut(el: HTMLElement): void {
  setTimeout(() => (el.style.opacity = '0'), 200);
  setTimeout(() => (el.style.visibility = 'hidden'), 1000);
}

export function fadeIn(el: HTMLElement): void {
  el.style.opacity = '0';
  el.style.visibility = 'visible';
  setTimeout(() => (el.style.opacity = '1'), 200);
}
