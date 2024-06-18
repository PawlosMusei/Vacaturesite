import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeInfo">
      <div className="information">
        <h2 className="information-h1">
          ALL DOORS ARE <span>OPEN FOR YOU</span>
        </h2>
        <p className="information-text">
          A internship is important for software developers because it gives
          them the opportunity to gain practical experience in a real work
          environment. During an internship, they can improve their technical
          skills, learn to work in a team, gain experience with real projects,
          and receive feedback from experienced professionals. This helps them
          in their personal and professional development as a software
          developer.
        </p>
        <button className="information-button">
          <Link to="/applications" className="information-button-item">
            Get Started
          </Link>
        </button>
      </div>
      <div className="post">
        <h2>Find Here Your NEW Intership</h2>
        <img className="postimg" src="/homepage-foto.jpg" alt="" />
      </div>
    </div>
  );
};

export default Home;
