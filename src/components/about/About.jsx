import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am Syed Muhammad Zulqarnain, a tireless seeker of knowledge,
          occassional purveyor of wisdom and also, a web developer.
        </p>
        <p className="a-desc">
          Most of the times, the journey is more enjoyable than destination, as
          the saying goes that ( Seeking is the reward itself). Doing projects
          in React has been the same journey for me. At every step, something
          new and interesting, where the logic and experience of past combines
          with the present and derivies a promising future.
          <br />
          <br />
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">GitHub Pro 2021</h4>
            <p className="a-award-desc">
              Regular updates of projects on GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
