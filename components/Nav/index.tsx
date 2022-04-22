/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import { Howl } from 'howler';
import { throttle } from 'lodash';
import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

enum ActiveBtn {
  active1 = 'active1',
  active2 = 'active2',
  active3 = 'active3',
}

const SOUND = new Howl({
  src: [`/sounds/sound.wav`, `/sounds/clickOpen.ogg`],
});

export default () => {
  const ready = useRef<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<ActiveBtn>();

  useEffect(() => {
    setTimeout(() => setActiveBtn(ActiveBtn.active1), 300);
    setTimeout(() => setActiveBtn(ActiveBtn.active2), 600);
    setTimeout(() => setActiveBtn(ActiveBtn.active3), 900);
    setTimeout(() => {
      setActiveBtn(ActiveBtn.active1);
      ready.current = true;
    }, 1200);
  }, []);

  const handler = (btn: ActiveBtn) => {
    if (!ready.current || btn === activeBtn) {
      return;
    }

    setActiveBtn(btn);
    SOUND.play();
  };

  const debouncedHandler = throttle(handler, 100, { leading: true, trailing: false });

  return (
    <nav className={`${styles.nav} ${activeBtn}`}>
      <div className={styles.main}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <path
            className={`${styles.el1} ${activeBtn === ActiveBtn.active1 && styles.moveElement1}`}
            d="m 59.162996,140.90284 c -2.285,-9.857 -4.286,-19.997 -2.112,-34.313 l -11.349,-1.32 c -0.4,-13.379002 6.216,-32.120005 20.06,-43.815005 l 9.238,8.446 c 12.775,-14.379 29.820004,-23.985 55.429004,-24.019 l 3.695,-43.0240002 c -26.398,-0.79 -47.845004,4.515 -64.403004,15.8370002 l -7.127,-12.6700002 C 27.554,23.609835 -9.8159999,76.543835 5.0530001,156.47584 Z"
          />
          <path
            className={`${styles.el2} ${activeBtn === ActiveBtn.active2 && styles.moveElement2}`}
            d="m 177.29964,41.898835 14.057,-36.0200002 c 77.944,41.4220002 75.077,98.0920052 75.992,129.5830052 l -38.436,-3.075 c 0.686,-6.626 1.054,-13.676 0,-22.622 l -26.136,4.173 c -7.394,-35.451005 -29.297,-49.346005 -57.104,-54.469005 l 1.977,-25.917 c 11.08,1.106 21.479,3.167 29.65,8.346 z"
          />
          <path
            className={`${styles.el3} ${activeBtn === ActiveBtn.active3 && styles.moveElement3}`}
            d="m 181.35022,205.73635 21.665,32.037 c -38.114,22.6 -79.001,29.51 -128.147004,6.914 l 5.301,-10.372 c -24.403,-13.177 -41.436,-32.741 -53.931996,-56.237 l 36.184996,-13.829 c 6.073,9.917 9.65,14.844 11.755,16.825 l 1.383,1.152 8.297,-9.45 c 11.521,10.913 24.163004,20.704 45.866004,21.435 l -0.23,25.814 c 19.335,0.973 36.497,-4.138 51.858,-14.29 z"
          />
          <path
            className={styles.el4}
            d="M 135.99845,80.772641 A 46.55793,48.395744 0 0 0 89.439846,129.16717 46.55793,48.395744 0 0 0 135.99845,177.56365 46.55793,48.395744 0 0 0 182.55704,129.16717 46.55793,48.395744 0 0 0 135.99845,80.772641 Z"
          />
        </svg>
        <div
          className={`${styles.logo_top_text}
          ${activeBtn === ActiveBtn.active1 && styles.logo_top_text_active}`}
        >
          <span>Home</span>
        </div>
        <div
          className={`${styles.logo_right_text}
          ${activeBtn === ActiveBtn.active2 && styles.logo_right_text_active}`}
        >
          <span>Portfolio</span>
        </div>
        <div
          className={`${styles.logo_bottom_text}
          ${activeBtn === ActiveBtn.active3 && styles.logo_bottom_text_active}`}
        >
          <span>
            Skills
            <br />
            <i>(experimental)</i>
          </span>
        </div>
      </div>
      <ul className={styles.logo_word}>
        <li
          className={styles.w1}
          onMouseOver={() => debouncedHandler(ActiveBtn.active1)}
          onFocus={() => debouncedHandler(ActiveBtn.active1)}
        >
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 84 134"
              >
                <path
                  className={`${activeBtn === ActiveBtn.active1 && styles.active_path_1}`}
                  d="m 38,0 -38,23.171875 0,4.029297 0,25.1875 38,0 L 38,24.179688 38,0 Z m 7,0 0,135 39,0 L 84,0 45,0 Z M 0,61.455078 0,92.6875 l 0,2.013672 0,2.015625 38,19.140623 0,-21.156248 0,-2.013672 0,-31.232422 -38,0 z"
                />
              </svg>
              <span
                className={`${styles.mobileNav} ${
                  activeBtn === ActiveBtn.active1 && styles.mobileNavActive1
                }`}
              >
                Home
              </span>
            </a>
          </Link>
        </li>
        <li
          className={styles.w2}
          onMouseOver={() => debouncedHandler(ActiveBtn.active2)}
          onFocus={() => debouncedHandler(ActiveBtn.active2)}
          onMouseOut={() => debouncedHandler(ActiveBtn.active1)}
          onBlur={() => debouncedHandler(ActiveBtn.active1)}
        >
          <Link href="/portfolio">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 108 135"
              >
                <path
                  className={`${activeBtn === ActiveBtn.active2 && styles.active_path_2}`}
                  d="m 0,0 38.099609,44.441406 0,-3.449218 L 38,0 0,0 Z M 0,14.78125 0.09960937,134.90039 36,134.99414 36,135 38,135 38,59.123047 0,14.78125 Z m 49,80.802734 0,38.429686 0,0.88672 0,0.0996 59,0 0,-0.0996 0,-0.88672 0,-38.332029 0,-0.09766 -58,0 -1,0 z"
                />
              </svg>
              <span
                className={`${styles.mobileNav} ${
                  activeBtn === ActiveBtn.active2 && styles.mobileNavActive2
                }`}
              >
                Portfolio
              </span>
            </a>
          </Link>
        </li>
        <li
          className={styles.w3}
          onMouseOver={() => debouncedHandler(ActiveBtn.active3)}
          onFocus={() => debouncedHandler(ActiveBtn.active3)}
          onMouseOut={() => debouncedHandler(ActiveBtn.active1)}
          onBlur={() => debouncedHandler(ActiveBtn.active1)}
        >
          <Link href="/skills">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 107 135"
              >
                <path
                  className={`${activeBtn === ActiveBtn.active3 && styles.active_path_3}`}
                  d="m 38,0 -38,26.798828 0.09960937,0 0,68.5 37.99999963,0 0,-68.5 -0.09961,0 0,-1 L 38,0 Z m 8,0 0,25.898438 61,0 L 107,0 46,0 Z m 0,48 0,26.099609 61,0 L 107,48 46,48 Z M 0,106.19922 0,135 l 73,0 1,0 33,0.19922 -32,-27.92774 0,-0.0723 -0.08203,0 L 74,106.39844 l 0,-0.19922 -74,0 z"
                />
              </svg>
              <span
                className={`${styles.mobileNav} ${
                  activeBtn === ActiveBtn.active3 && styles.mobileNavActive3
                }`}
              >
                Skills
              </span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
