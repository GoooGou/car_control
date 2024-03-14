// import React from "react";
import "./LampCard.css";
import TitleGroup from "./../common/TitleGroup";
import LampIcon from "./../common/LampIcon";
import LampBlurCicle from "./../common/LampBlurCicle";

const Lamitem = () => {
  return (
    <div className=" rounded-lg w-full  md:min-h-24 bg-lamp_card border border-wangkan-border flex p-4 md:grow  items-end relative overflow-hidden">
      <LampIcon />
      <LampBlurCicle />
      <TitleGroup />
    </div>
  );
};

export default Lamitem;
