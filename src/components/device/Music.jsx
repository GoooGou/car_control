// import React from "react";
import "./Music.css";
import MusicIcon from "../common/MusicIcon";
import MusicBG from "./MusicBG";
import MusicController from "./MusicController";
// import Sence from "./Sence";

const Music = () => {
  return (
    <div className=" w-full MusicCard relative ">
      <div className="w-full ">
        <div className=" absolute  w-full p-4">
          <div className="flex gap-4 items-end justify-between w-full ">
            <MusicIcon />
            <div className="flex  flex-col ">
              <p className="text-[.6rem] opacity-80 text-nowrap">FOLLW HRART</p>
              <span className="text-[.5rem] opacity-40">04:32</span>
            </div>
            <MusicController />
          </div>
        </div>

        <MusicBG />
      </div>
    </div>
  );
};

export default Music;
