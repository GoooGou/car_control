// import React from "react";
import Music from "./Music";
import Top from "./Top";
import "./LampRoot.css";

const LampRoot = () => {
  return (
    <div className="flex justify-between flex-col h-full min-height ">
      <Top />
      <Music />
    </div>
  );
};

export default LampRoot;
