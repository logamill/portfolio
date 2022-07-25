import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="lm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/1.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Logan miller</h3>
            <p className="job">
              Full-Stack Software Engineer based in New York City.
            </p>
            <span><p>React | HTML | CSS | Javascript | Ruby | Rails | Python</p></span>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
