/* eslint-disable func-names */

'use client';

interface ConsoleI extends Console {
  image: (url: string) => void;
}

export default (): string => {
  if (typeof XMLHttpRequest === 'undefined') {
    return '';
  }

  (console as ConsoleI).image = (url: string) => {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      const fr = new FileReader();

      fr.onload = function () {
        const style = `font-size: 200px; background-image: url("${this.result}"); background-size: contain; background-repeat: no-repeat;`;
        // eslint-disable-next-line no-console
        console.log('%c     ', style);
      };
      fr.readAsDataURL(xhr.response); // async call
    };
    xhr.send();
  };

  (console as ConsoleI).image('https://4life.work/images/logo.png');

  return '';
};
