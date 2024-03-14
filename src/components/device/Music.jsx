// import React from "react";
import "./Music.css";
import MusicIcon from "../common/MusicIcon";
import MusicBG from "./MusicBG";
import MusicController from "./MusicController";

const Music = () => {
  return (
    <div className=" w-full MusicCard relative">
      <div>
        <div className=" absolute ">
          <div className="flex gap-4 items-end ">
            <MusicIcon />
            <p className="text-[.8rem] opacity-80">FOLLW HRART</p>
            <span className="text-[.75rem] opacity-40">04:32</span>
            <MusicController />
          </div>
        </div>

        <MusicBG />
      </div>
    </div>
  );
};

export default Music;
