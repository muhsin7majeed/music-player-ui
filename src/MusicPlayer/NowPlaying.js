import React from "react";
import coverPNG from "../assets/images/music_cover_one.png";
import s from "./now-playing.module.scss";

import heartSVG from "../assets/icons/heart_fill.svg";
import playlistSVG from "../assets/icons/add_playlist.svg";
import shareSVG from "../assets/icons/share.svg";

const NowPlaying = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.img_container}>
        <img src={coverPNG} alt="music cover" />
      </div>

      <div className={s.now_playing}>
        <span className={s.muted}>Now Playing</span>

        <div className={s.info}>
          <h2>Purple Haze</h2>
          <span className={s.author}>Jimi Hendrix</span>
          <span className={s.muted}>Woodstock</span>
        </div>

        <div className={s.options}>
          <button>
            <img src={heartSVG} alt="favorite this audio" />
          </button>

          <button>
            <img src={playlistSVG} alt="add this to playlist" />
          </button>

          <button>
            <img src={shareSVG} alt="share this audio" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
