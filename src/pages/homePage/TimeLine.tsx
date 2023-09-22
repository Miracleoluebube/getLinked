import { timeline } from "../../static/index";

const TimeLine = () => {
  return (
    <div className="homepage_timeline">
      <div className="container flex">
        <div className="title">
          <h2>Timeline</h2>
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>

        <div className="timeline_container">
          {timeline.map((time, idx) => (
            <div key={idx} className="timeline_box flex">
              <div className="left">
                <h3>{time.cardTitle}</h3>
                <p>{time.cardDetailedText}</p>
              </div>
              <div className="center flex">{idx + 1}</div>
              <h3 className="right">{time.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
