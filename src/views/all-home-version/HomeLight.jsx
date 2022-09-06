import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Home from "../../components/Home";
import About from "../../components/About";
import Portfolio from "../../components/Portfolio";
import Resume from "../../components/Resume";
import Contact from "../../components/Contact";
import logamill from '../../assets/images/assets/img/logo/logamilldark.png';
import homerun from '../../assets/images/assets/img/svg/home-run.svg';
import avatar from '../../assets/images/assets/img/svg/avatar.svg';
import briefcase from '../../assets/images/assets/img/svg/briefcase.svg';
import paper from '../../assets/images/assets/img/svg/paper.svg';
import mail from '../../assets/images/assets/img/svg/mail.svg'
import { Link } from "react-router-dom";


const HomeDark = () => {
  return (
    <>
      <Tabs>
        <TabList>
          {/* START LEFT MENU CONTENT */}
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="lm_logo">
                <Link to={Home}>
                  <img src={logamill} alt="brand" />
                </Link>
              </div>
              {/* END LOGO */}

              <div className="menu">
                <ul>
                  <Tab>
                    <img
                      className="svg"
                      src={homerun}
                      alt="homerun"
                    />
                    <span className="menu_content">Home</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={avatar}
                      alt="avatar"
                    />
                    <span className="menu_content">About</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={briefcase}
                      alt="briefcase"
                    />
                    <span className="menu_content">Portfolio</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={paper}
                      alt="paper"
                    />
                    <span className="menu_content">Resume</span>
                  </Tab>
                  <Tab>
                    <img
                      className="svg"
                      src={mail}
                      alt="mail"
                    />
                    <span className="menu_content"> Contact</span>
                  </Tab>
                </ul>
              </div>
              {/* END MENU */}

              <div className="copyright">
                <p>
                  {/* &copy; {new Date().getFullYear()} LOGAMILL <br />  */}
                </p>
              </div>
              {/* END COPYRIGHT */}
            </div>
          </div>
          {/* END LEFT MENU CONTENT */}
        </TabList>
        {/* END SIDEBAR TABLIST */}

        {/* START RIGHT PART CONTENT */}
        <div className="rightpart">
          <div className="rightpart_in">
            <div className="lm_section">
              <div className="container">
                <TabPanel>
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                  </div>
                </TabPanel>
                {/* END HOME MENU TAB CONTENT */}

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <About />
                  </div>
                </TabPanel>
                {/* END ABOUT MENU TAB CONTENT */}

                <TabPanel>
                  <Portfolio />
                </TabPanel>
                {/* END PORTFOLIO MENU TAB CONTENT */}

                <TabPanel>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                  <Resume />
                  </div>
                </TabPanel>
                {/* END RESUME MENU TAB CONTENT */}

                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <Contact />
                  </div>
                </TabPanel>
                {/* END CONTACT MENU TAB CONTENT */}
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART CONTENT */}
      </Tabs>
      {/* END TABS */}
    </>
  );
};

export default HomeDark;
