import Gesturepad from './Gesturepad';
import { themeDefault } from './model';
import { fadeIn, fadeOut, SOUNDS } from './utils';

export default class SkillViewer {
  public view: HTMLDivElement;
  private div: HTMLDivElement;
  private detailContainer: HTMLDivElement;
  private detailDescriptionContainer: HTMLDivElement;
  private detailNameContainer: HTMLDivElement;
  private gesturepad: Gesturepad;
  private closeButton: HTMLButtonElement;
  public isOpen: boolean;
  public onClosePressed: any;
  public alpha: number = 0;
  public onSwapPressed: any;
  private viewClassname = 'skillView';

  constructor(el: HTMLDivElement) {
    this.view = document.createElement('div');
    this.view.style.position = 'absolute';
    this.view.className = this.viewClassname;
    this.div = document.createElement('div');
    this.div.style.width = '100%';
    this.div.style.maxWidth = '500px';
    this.div.style.height = '500px';
    this.view.style.width = '100%';
    this.view.style.maxWidth = '500px';
    this.view.style.height = '500px';
    el.appendChild(this.view);
    this.gesturepad = new Gesturepad(this.view);
    this.gesturepad.onClose = this.closePressed.bind(this);
    this.closeButton = document.createElement('button');
    this.closeButton.className = 'closeButtonSmall';
    this.detailContainer = document.createElement('div');
    this.detailContainer.className = 'detailHeader';
    this.detailDescriptionContainer = document.createElement('div');
    this.detailDescriptionContainer.className = 'detailDescription';
    this.detailNameContainer = document.createElement('div');
    this.detailNameContainer.className = 'detailName';
    this.view.appendChild(this.detailContainer);
    this.view.appendChild(this.detailDescriptionContainer);
    this.view.appendChild(this.detailNameContainer);
    this.view.appendChild(this.closeButton);
    this.closeButton.addEventListener('click', this.closePressed.bind(this));
    this.closeButton.addEventListener('touchstart', this.closePressed.bind(this));
    this.isOpen = false;
  }

  private closePressed(event) {
    event.preventDefault();
    if (!this.isOpen) return;
    SOUNDS.clickClose.play();
    this.isOpen = false;
    if (this.onClosePressed) this.onClosePressed();
    fadeOut(this.view);
    this.gesturepad.disable();
    // reset theme color
    this.view.className = this.viewClassname;
  }

  public show(skill) {
    this.isOpen = true;
    this.detailContainer.innerHTML = skill.copy;
    this.view.classList.add(skill.theme || themeDefault);
    this.detailDescriptionContainer.innerHTML = skill.story;
    this.detailNameContainer.innerHTML = `<b><a href="http://${skill.url}" target="_blank">${skill.url}</a></b>`;
    this.detailContainer.style.color = skill.textColor || '#FFFFFF';
    this.detailDescriptionContainer.style.color = skill.textColor || '#FFFFFF';
    this.detailNameContainer.style.color = skill.textColor || '#FFFFFF';
    this.alpha = 0;
    fadeIn(this.view);
  }
}
