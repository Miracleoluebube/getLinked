import React from "react";

import image from "../../assets/rules and guidelines.svg";

const RulesAndGuideline = () => {
  return (
    <div className="homepage_introduction homepage_rulesGuideline">
      <div className="flex container">
        <div className="left">
          <img src={image} alt="big-idea" />
        </div>

        <div className="right">
          <h2>
            Rules and <br />
            <span className="p-clr">Guidelines</span>
          </h2>

          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesAndGuideline;
