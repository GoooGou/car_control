// import React from "react";
import Direactor from "./header/Direactor";
// import Lamp from "./device/Top";
import LampRoot from "./device/LampRoot";
import Sence from "./device/Sence";

const Container = () => {
  return (
    <div className="container mx-auto text-white grid md:grid-rows-7 md:grid-cols-3 gap-4 ">
      <div className="card ">
        01
        <Direactor />
      </div>
      <div className="card">02</div>
      <div className="card">03</div>
      <div className="card row-span-3">04</div>
      <div className="card row-span-3 relative">
        <LampRoot />
        <Sence />
      </div>
      <div className="card">06</div>
      <div className="card row-span-2">07</div>
      <div className="card  row-span-3">08</div>
      <div className="card  row-span-3">09</div>
      <div className="card row-span-3">10</div>
    </div>
  );
};

export default Container;
