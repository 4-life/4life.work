/* eslint-disable react/require-default-props */
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Howler } from 'howler';
import styles from './SoundButton.module.css';

export enum Theme {
  white = 'white',
  black = 'black',
}

interface Options {
  label?: boolean;
  theme?: Theme;
}

export default ({ label, theme }: Options) => {
  const [soundOn, setSoundOn] = useState<boolean>(false);

  useEffect(() => {
    const soundFromLS = localStorage.getItem('soundOn');
    const soundOnVal = soundFromLS === 'true';
    setSoundOn(soundOnVal);
    if (soundOnVal) {
      Howler.mute(false);
    } else {
      Howler.mute(true);
    }
  }, [theme]);

  const handler = () => {
    if (soundOn) {
      Howler.mute(true);
    } else {
      Howler.mute(false);
    }

    setSoundOn(!soundOn);
    localStorage.setItem('soundOn', !soundOn ? 'true' : 'false');
  };

  return (
    <button className={styles.soundButton} type="button" onClick={handler}>
      <div className={!soundOn ? styles.soundButtonHidden : ''}>
        <Image
          src={`/images/sounds/sound_ON_${theme || Theme.white}.png`}
          alt="sound_on"
          width={30}
          height={30}
        />
      </div>

      <div className={soundOn ? styles.soundButtonHidden : ''}>
        <Image
          src={`/images/sounds/sound_OFF_${theme || Theme.white}.png`}
          alt="sound_off"
          width={30}
          height={30}
        />
      </div>

      {label && (
        <span className={styles.soundButtonLabel}>
          <b>{soundOn ? 'Sound On' : 'Sound Off'}</b>
        </span>
      )}
    </button>
  );
};
