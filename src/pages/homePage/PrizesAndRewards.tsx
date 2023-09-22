import React from "react";

import prizeAndReward from "../../assets/prizesAndRewards.svg";
import reward1 from "../../assets/reward1.svg";
import reward2 from "../../assets/reward2.svg";
import reward3 from "../../assets/reward3.svg";

const PrizesAndRewards = () => {
  return (
    <div className="homepage_pricesReward">
      <div className="container flex">
        <div className="right top-right">
          <div className="title">
            <h2>Prizes and</h2>
            <h2 className="p-clr">Rewards</h2>

            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>

        <div className="left">
          <img src={prizeAndReward} alt="prizesAndRewards" />
        </div>

        <div className="right">
          <div className="title">
            <h2>Prizes and</h2>
            <h2 className="p-clr">Rewards</h2>

            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>

          <div className="priceAndReward flex">
            <div className="box">
              <img src={reward2} alt="reward2" />

              <h3>2nd</h3>
              <h4>Runner</h4>
              <h5>N300,000</h5>
            </div>

            <div className="box">
              <img src={reward1} alt="reward1" />

              <h3>1nd</h3>
              <h4>Runner</h4>
              <h5>N400,000</h5>
            </div>

            <div className="box">
              <img src={reward3} alt="reward3" />

              <h3>3nd</h3>
              <h4>Runner</h4>
              <h5>N150,000</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesAndRewards;
