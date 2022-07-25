import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";
import homeImg from '../assets/images/assets/img/slider/1.jpg'
import cancel from "../assets/images/assets/img/svg/cancel.svg"

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="lm_about">
        <div className="about_image ">
          <img src={homeImg} alt="about" />
        </div>
        <div className="description">
          <h3 className="name">Logan Miller | Full-Stack Software Engineer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Recently graduated from Flatiron School's Software Engineering Bootcamp in NYC. Background in legal-tech working as a technical writer at a firm called Kraft Kennedy. Attended Háskóli Íslands (University of Iceland) in Reykjavik, Iceland from 2019-2021. 
              </p>
              <div className="lm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Location:</span>New York, NY
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:mail@gmail.com">loganmiller214@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                 *Available upon request
                  </p>
                </li>
                <li>
                  <p>
                    <span>Education:</span>Flatiron School, Cornell University, Univercity of Iceland, Pace University
                  </p>
                </li>
                <li>
                  <p>
                    <span>Availability:</span> Full-time, Freelance
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="lm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div
              className="description_wrap scrollable"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Front-End</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">React | Javascript</span>
                        <span className="number"></span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div
                            className="bar_in"
                            // style={{ width: 95 + "%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">HTML | PHP</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">CSS | SASS </span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Back-End</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Ruby | Python</span>
                      
                      </span>
                      <div className="background">
                        
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">Rails</span>
                        <span className="number"></span>
                      </span>
                      <div className="background">
                      </div>
                    </div>

                    <div className="progress_inner" data-value="85">
                      <span>
                        <span className="label">ActiveRecord | SQL</span>
                        <span className="number"></span>
                      </span>
                      <div className="background">
                      </div>
                    </div>
                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>20+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>1000+</h3>
                      <span>Technical Documents Written</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>1M+</h3>
                      <span>Youtube Views</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>Languages</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
