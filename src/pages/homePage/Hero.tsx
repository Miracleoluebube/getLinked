import React from "react";

import chain from "../../assets/chain.svg";
import hero1 from "../../assets/home-hero1.png";
import hero2 from "../../assets/home-hero2.svg";
import ideaBulb from "../../assets/idea.svg";
import fire from "../../assets/fire.svg";
import line from "../../assets/down-bended-line.svg";

import { Timer } from "../../components";

const Hero = () => {
  return (
    <div className="homepage_hero">
      <div className="container">
        <div className="top-title">
          <h3>Igniting a Revolution in HR Innovation</h3>
          <img src={line} alt="underline" />
        </div>

        <div className="flex hero_wrapper">
          <div className="title">
            <h1 style={{ position: "relative", width: "max-content" }}>
              <img src={ideaBulb} alt="bulb" className="title-bulb" />
              getlinked Tech
            </h1>

            <h1 className="flex text-left">
              Hackathon <span className="p-clr"> 1.0</span>{" "}
              <img src={chain} alt="chain" className="chain" />
              <img src={fire} alt="fire" className="fire" />
            </h1>

            <p>
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>

            <button className="p-btn">Register</button>

            <div style={{ marginTop: 41 }}>
              <Timer h="00" m="00" s="00" />
            </div>
          </div>

          <div className="img-grp">
            <img src={hero1} alt="hero" className="hero-1" />
            <img src={hero2} alt="hero" className="hero-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
