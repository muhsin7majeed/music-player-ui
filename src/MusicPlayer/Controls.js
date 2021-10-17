import React, { useEffect, useState } from "react";
import s from "./controls.module.scss";
import { secondsToMinutes } from "../helpers/utils";

import shuffleSVG from "../assets/icons/shuffle.svg";
import repeatSVG from "../assets/icons/repeat.svg";
import prevWhiteSVG from "../assets/icons/prev_white.svg";
import pauseWhiteSVG from "../assets/icons/pause_white.svg";
import playWhiteSVG from "../assets/icons/play_white.svg";
import nextWhiteSVG from "../assets/icons/next_white.svg";
import repeatAllSVG from "../assets/icons/repeat_all.svg";
import settingsSVG from "../assets/icons/settings.svg";

const DURATION = 120;

const Controls = () => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(60);

  function handleProgress(value) {
    setProgress(+value);
  }

  function handlePlaying() {
    setPlaying(!playing);
  }

  useEffect(() => {
    const timeout = () =>
      setTimeout(() => {
        setProgress((p) => {
          if (p === DURATION) {
            setPlaying(false);
            return DURATION;
          }

          return p + 1;
        });
      }, 1000);

    if (playing) timeout();

    return () => clearTimeout(timeout);
  }, [playing, progress]);

  return (
    <div className={s.wrapper}>
      <div className={s.controls}>
        <div className={s.top_sec}>
          <button className={s.muted}>
            <div className={s.img_container}>
              <img src={shuffleSVG} alt="favorite this audio" />
            </div>
          </button>

          <button className={s.muted}>
            <div className={s.img_container}>
              <img src={repeatSVG} alt="repeat this song" />
            </div>
          </button>
        </div>

        <div className={s.mid_sec}>
          <button className={s.prev_next}>
            <div className={s.img_container}>
              <img src={prevWhiteSVG} alt="play previous audio" />
            </div>
          </button>

          <button className={s.play_pause} onClick={handlePlaying}>
            <div className={s.img_container}>
              <img src={playing ? pauseWhiteSVG : playWhiteSVG} alt="play or pause this audio" />
            </div>
          </button>

          <button className={s.prev_next}>
            <div className={s.img_container}>
              <img src={nextWhiteSVG} alt="play next audio" />
            </div>
          </button>
        </div>

        <div className={s.bot_sec}>
          <button className={s.muted}>
            <div className={s.img_container}>
              <img src={repeatAllSVG} alt="repeat all audios" />
            </div>
          </button>

          <button className={s.muted}>
            <div className={s.img_container}>
              <img src={settingsSVG} alt="settings" />
            </div>
          </button>
        </div>
      </div>

      <div className={s.progress}>
        <input
          type="range"
          max={DURATION}
          value={progress}
          className={s.slider}
          onChange={(e) => handleProgress(e.target.value)}
        />

        <div className={s.times}>
          <span>{secondsToMinutes(progress)}</span>
          <span>{secondsToMinutes(DURATION)}</span>
        </div>
      </div>
    </div>
  );
};

export default Controls;
