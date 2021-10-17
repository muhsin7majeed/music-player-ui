import React from "react";
import s from "./index.module.scss";

import Controls from "./Controls";
import NowPlaying from "./NowPlaying";

const MusicPlayer = () => {
  return (
    <div className={s.wrapper}>
      <NowPlaying />

      <Controls />
    </div>
  );
};

export default MusicPlayer;
