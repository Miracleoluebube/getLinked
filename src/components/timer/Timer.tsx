import React from "react";
import "./Timer.scss";

const Timer = ({ h, m, s }: any) => {
  return (
    <div className="timer flex">
      <h1>
        {h}
        <span>H</span>
      </h1>
      <h1>
        {m}
        <span>M</span>
      </h1>
      <h1>
        {s}
        <span>S</span>
      </h1>
    </div>
  );
};

export default Timer;
