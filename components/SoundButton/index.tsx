'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Howler } from 'howler';
import styles from './SoundButton.module.css';
import Theme from './types';

interface Options {
  label?: boolean;
  theme?: Theme;
}

export default ({ label, theme }: Options): JSX.Element => {
  const [isSoundOn, setSoundOn] = useState<boolean>(false);

  useEffect(() => {
    const soundFromLS = localStorage.getItem('isSoundOn');
    const isSoundOnVal = soundFromLS === 'true';
    setSoundOn(isSoundOnVal);
    if (isSoundOnVal) {
      Howler.mute(false);
    } else {
      Howler.mute(true);
    }
  }, [theme]);

  const handler = (): void => {
    if (isSoundOn) {
      Howler.mute(true);
    } else {
      Howler.mute(false);
    }

    setSoundOn(!isSoundOn);
    localStorage.setItem('isSoundOn', !isSoundOn ? 'true' : 'false');
  };

  return (
    <button className={styles.soundButton} type="button" onClick={handler}>
      <div className={!isSoundOn ? styles.soundButtonHidden : ''}>
        <Image
          src={`/images/sounds/sound_ON_${theme || Theme.white}.png`}
          alt="sound_on"
          width={30}
          height={30}
        />
      </div>

      <div className={isSoundOn ? styles.soundButtonHidden : ''}>
        <Image
          src={`/images/sounds/sound_OFF_${theme || Theme.white}.png`}
          alt="sound_off"
          width={30}
          height={30}
        />
      </div>

      {label && (
        <span className={styles.soundButtonLabel}>
          <b>{isSoundOn ? 'Sound On' : 'Sound Off'}</b>
        </span>
      )}
    </button>
  );
};
