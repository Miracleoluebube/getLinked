import React from "react";

import image from "../../assets/judging criteriaKey attributes.svg";

const JudgingCriteriaKeys = () => {
  return (
    <div className="homepage_introduction homepage_judging-criteria">
      <div className="flex container">
        <div className="left">
          <img src={image} alt="big-idea" />
        </div>

        <div className="right">
          <h2>
            Judging Criteria <br />
            <span className="p-clr">Key attributes</span>
          </h2>

          <p>
            <span className="s-clr">Innovation and Creativity:</span> Evaluate
            the uniqueness and creativity of the solution. Consider whether it
            addresses a real-world problem in a novel way or introduces
            innovative features.
          </p>

          <p>
            <span className="s-clr">Functionality:</span> Assess how well the
            solution works. Does it perform its intended functions effectively
            and without major issues? Judges would consider the completeness and
            robustness of the solution.
          </p>

          <p>
            <span className="s-clr">Impact and Relevance:</span> Determine the
            potential impact of the solution in the real world. Does it address
            a significant problem, and is it relevant to the target audience?
            Judges would assess the potential social, economic, or environmental
            benefits.
          </p>

          <p>
            <span className="s-clr">Technical Complexity:</span> Evaluate the
            technical sophistication of the solution. Judges would consider the
            complexity of the code, the use of advanced technologies or
            algorithms, and the scalability of the solution.
          </p>

          <p>
            <span className="s-clr">Adherence to Hackathon Rules:</span> Judges
            will Ensure that the team adhered to the rules and guidelines of the
            hackathon, including deadlines, use of specific technologies or
            APIs, and any other competition-specific requirements.
          </p>

          <button className="p-btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default JudgingCriteriaKeys;
