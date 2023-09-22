import React from "react";

import bigIdea from "../../assets/The big idea.svg";

const Introduction = () => {
  return (
    <div className="homepage_introduction">
      <div className="flex container">
        <div className="left">
          <img src={bigIdea} alt="big-idea" />
        </div>

        <div className="right">
          <h2>
            Introduction to getlinked <br />
            <span className="p-clr">tech Hackathon 1.0</span>
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

export default Introduction;
