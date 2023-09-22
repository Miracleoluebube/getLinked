import React from "react";
import "./HomePage.scss";

import Hero from "./Hero";
import Introduction from "./Introduction";
import RulesAndGuideline from "./RulesAndGuideline";
import JudgingCriteriaKeys from "./JudgingCriteriaKeys";
import Faqs from "./Faqs";
import TimeLine from "./TimeLine";
import PrizesAndRewards from "./PrizesAndRewards";
import Sponsers from "./Sponsers";
import PrivacyPolicy from "./PrivacyPolicy";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />

      <Introduction />

      <RulesAndGuideline />

      <JudgingCriteriaKeys />

      <Faqs />

      <TimeLine />

      <PrizesAndRewards />

      <Sponsers />

      <PrivacyPolicy />
    </div>
  );
};

export default HomePage;
