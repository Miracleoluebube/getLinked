import React from "react";

import sponser1 from "../../assets/sponser1.svg";
import sponser2 from "../../assets/sponser2.svg";
import sponser3 from "../../assets/sponser3.svg";
import sponser4 from "../../assets/sponser4.svg";
import sponser5 from "../../assets/sponser5.svg";
import sponser6 from "../../assets/sponser6.svg";

const sponsers = [
  [sponser1, sponser2, sponser3],
  [sponser4, sponser5, sponser6],
];

const Sponsers = () => {
  return (
    <div className="homepage_sponsers">
      <div className="container">
        <div className="title">
          <h2>Partners and Sponsors</h2>
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>

        <div className="sponsers_container">
          <div className="sponsers flex">
            {sponsers[0].map((sponser, idx) => (
              <div key={idx} className={`sponser flex sponser-${idx + 1}`}>
                <img src={sponser} alt="sponser" />
                <div className="underline"></div>
              </div>
            ))}
          </div>

          <div className="sponsers flex">
            {sponsers[1].map((sponser, idx) => (
              <div key={idx} className={`sponser flex sponser-${idx + 4}`}>
                <img src={sponser} alt="sponser" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
