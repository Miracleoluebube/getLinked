import React from "react";

import tick from "../../assets/tick.svg";
import privacyPolicy from "../../assets/privacy-policy.svg";
import privacyPolicyBgc from "../../assets/privacy-policy-bgc.svg";

const PrivacyPolicy = () => {
  return (
    <div className="homepage_privacyPolicy">
      <div className="container">
        <div className="left">
          <div className="title">
            <h2>Privacy Policy and</h2>
            <h2 className="p-clr">Terms</h2>

            <p className="subtitle">Last updated on September 12, 2023</p>

            <p>
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </p>
          </div>

          <div className="privacy-box">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>

            <h4 className="p-clr">Licensing Policy</h4>
            <p className="list-title">
              Here are terms of our Standard License:
            </p>

            <ul>
              <li className="flex">
                <img src={tick} alt="tick" />
                <span>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </li>

              <li className="flex">
                <img src={tick} alt="tick" />
                <span>
                  You are licensed to use the item available at any free source
                  sites, for your project developementlusive right to navigate
                  and register for our event
                </span>
              </li>
            </ul>

            <button className="p-btn">Read More</button>
          </div>
        </div>

        <div className="right">
          <img
            src={privacyPolicyBgc}
            alt="privacyPolicyBgc"
            className="privacyPolicyBgc"
          />
          <img
            src={privacyPolicy}
            alt="privacyPolicy"
            className="privacyPolicy"
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
