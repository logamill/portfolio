import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";

import magickOne from '../assets/images/assets/img/portfolio/magick-home.png';
import magickTwo from '../assets/images/assets/img/portfolio/magick-home-2.png';
import magickThree from '../assets/images/assets/img/portfolio/magick-product.png';

import spotOne from '../assets/images/assets/img/portfolio/4.jpg';
import spotTwo from '../assets/images/assets/img/portfolio/3.jpg';
import spotThree from '../assets/images/assets/img/portfolio/2.jpg';
import spotFour from '../assets/images/assets/img/portfolio/10.jpg';

import caroOne from '../assets/images/assets/img/portfolio/5.jpg';
import caroTwo from '../assets/images/assets/img/portfolio/6.jpg';
import caroThree from '../assets/images/assets/img/portfolio/7.jpg';
import caroFour from '../assets/images/assets/img/portfolio/11.jpg';
import caroFive from '../assets/images/assets/img/portfolio/12.jpg';

import uniqOne from '../assets/images/assets/img/portfolio/8.jpg';
import uniqTwo from '../assets/images/assets/img/portfolio/9.jpg';
import uniqThree from '../assets/images/assets/img/portfolio/1.jpg';

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaYoutube } from 'react-icons/fa';
{/* IMAGE IMPORTS */}


const Portfolio = () => {
  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
    <div className="lm_portfolio">
      <SimpleReactLightbox>
          <div className="lm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Projects</h3>
              </div>
            </div>
          </div>
          {/* END lm_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                {/* All */}

                <Tab>MagickCo</Tab>

                <Tab>Spotifinder</Tab>

                <Tab>Carousel</Tab>

                <Tab>≠ Uniqlo</Tab>

              </TabList>
              {/* END TABLIST */}

              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                
                    <SRLWrapper>
                    <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                      >
                      <div className="example-link">
                        <a href="https://magickco.com/">Link <FaLink /></a>
                      </div>
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={magickOne}>
                              <img
                                src={magickOne}
                                alt="Magick Co"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>MagickCo.com</h3>
                          </div>
                        </div>
                      </li>

                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="300"
                      >
                      <div className="example-link">
                        <a href="https://github.com/logamill/Phase-5-Spotifinder">Code <FaGithub /></a><span>|</span>
                        <a href="https://spotifinder-p5.herokuapp.com/">Link <FaLink /></a><span>|</span>
                        <a href="https://www.youtube.com/watch?v=7hLXvhpesMQ&ab_channel=logamill">Demo <FaYoutube /></a>
                      </div>
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={spotOne}>
                              <img
                                src={spotOne}
                                alt="Spotifinder - View your advanced Spotify analytics and match with other users to find your own music soul mate!"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Spotifinder</h3>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      <div className="example-link">
                        <a href="https://github.com/logamill/Phase-4-Project">Code <FaGithub /></a><span>|</span>
                        <a href="https://youtu.be/jyal3JsCRA0">Demo <FaYoutube /></a>
                      </div>
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={caroFive}>
                              <img
                                src={caroFive}
                                alt="Carousel - Art/Photography sharing website built for professionals."
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Carousel</h3>
                          </div>
                        </div>
                    </li>

                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                    <div className="example-link">
                        <a href="https://github.com/logamill/Phase-2-Project">Code <FaGithub /></a><span>|</span>
                        <a href="https://youtu.be/wY45c3mwI9s">Demo <FaYoutube /></a>
                      </div>
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={uniqOne}>
                              <img
                                src={uniqOne}
                                alt="≠ Uniqlo - E-commerce website built for users to favorite, like and sell street-clothing."
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>≠ Uniqlo</h3>
                          </div>
                        </div>
                    </li>
                    </SRLWrapper>
                    {/* END DETAILS */}
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END ALL All */}

                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={magickOne}>
                              <img
                                src={magickOne}
                                alt="MagickCo - Home"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>MagickCo.com</h3>
                            <span>Shopify</span>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={magickTwo}>
                              <img
                                src={magickTwo}
                                alt="Home Page Info pt.2"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>MagickCo</h3>
                            <span>Home Info pt.2</span>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={magickThree}>
                              <img
                                src={magickThree}
                                alt="Product Information / Order"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>MagickCo</h3>
                              <span>Product Information / Order</span>
                            </div>
                          </div>
                        </div>
                      </li>

                    </SRLWrapper>
                  </ul>
                </TabPanel>

                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={spotOne}>
                              <img
                                src={spotOne}
                                alt="Spotifinder - Home"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Spotifinder</h3>
                            <span>React | Ruby | Rails</span>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={spotThree}>
                              <img
                                src={spotThree}
                                alt="User Analytics"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Spotifinder</h3>
                            <span>User Analytics</span>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={spotTwo}>
                              <img
                                src={spotTwo}
                                alt="User-Compare & Match"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Spotifinder</h3>
                              <span>User Compare</span>
                            </div>
                          </div>
                        </div>
                        </li>
                        <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                        >
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={spotFour}>
                              <img
                                src={spotFour}
                                alt="Top Tracks Carousel"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Spotifinder</h3>
                              <span>Top Tracks Carousel</span>
                            </div>
                          </div>
                        </div>
                      </li>

                    </SRLWrapper>
                  </ul>

                </TabPanel>

                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={caroOne}>
                              <img
                                src={caroOne}
                                alt="Carousel - Home"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Carousel</h3>
                            <span>React | Ruby | Rails</span>
                          </div>
                        </div>
                      </li>
                      {/* END SHOT */}
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={caroTwo}>
                              <img
                                src={caroTwo}
                                alt="Browse Carousel"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Carousel</h3>
                              <span>Browse Image Carousel</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li data-aos="fade-right" data-aos-duration="1200">
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={caroThree}>
                              <img
                                src={caroThree}
                                alt="Carousel - Personal Portfolio Browse"
                              />
                            </a>
                          </div>
                          <div className="mobile_title">
                            <h3>Carousel</h3>
                            <span>Personal Portfolio Browse</span>
                          </div>
                        </div>
                      </li>
                      <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={caroFour}>
                              <img
                                src={caroFour}
                                alt="View Posts and Comment"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>Carousel</h3>
                              <span>Post View & Comment</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </SRLWrapper>
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>

                <TabPanel>
                  <ul className="portfolio_list">
                    <SRLWrapper>
                  <li
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        data-aos-delay="100"
                      >
                        <div className="inner">
                          <div className="entry lm_portfolio_animation_wrap">
                            <a href={uniqOne}>
                              <img
                                src={uniqOne}
                                alt="Landing Page - Scroll Parallax"
                              />
                            </a>
                            <div className="mobile_title">
                              <h3>≠ Uniqlo</h3>
                              <span>React</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    {/* END DETAILS */}
                    <li
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                    <div className="inner">
                      <div className="entry lm_portfolio_animation_wrap">
                        <a href={uniqTwo}>
                          <img
                            src={uniqTwo}
                            alt="Category Header"
                          />
                        </a>
                        <div className="mobile_title">
                          <h3>≠ Uniqlo</h3>
                          <span>React</span>
                        </div>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="entry lm_portfolio_animation_wrap">
                        <a href={uniqThree}>
                          <img
                            src={uniqThree}
                            alt="Item Modal"
                          />
                        </a>
                        <div className="mobile_title">
                          <h3>≠ Uniqlo</h3>
                          <span>React</span>
                        </div>
                      </div>
                    </div>
                    </li>
                    </SRLWrapper>
                    {/* END DETAILS */}
                  </ul>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        
      </SimpleReactLightbox>
      </div>
    </>
  );
};

export default Portfolio;
