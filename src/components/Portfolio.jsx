import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";
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
                <Tab>Spotifinder</Tab>
                {/* For Youtube */}
                <Tab>Carousel</Tab>
                {/* For Images */}
                <Tab>≠ Uniqlo</Tab>
                {/* For Popup Details */}
              </TabList>
              {/* END TABLIST */}

              <div className="list_wrapper">
                <TabPanel>
                  <ul className="portfolio_list">
                    {/* END VIMEO */}
                    {/* END YOUTUBE */}
                    <SRLWrapper>
                      {/* END SHOT */}
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
                    {/* END VIMEO */}
                    </SRLWrapper>
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END VIMEO VIDEO */}

                
                {/* END YOUTUBE VIDEO */}

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
                      {/* END SHOT */}
                    </SRLWrapper>
                  </ul>
                  {/* END PORTFOLIO LIST */}
                </TabPanel>
                {/* END PHOTOGRAHY */}

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
                  {/* END DETAILS GALLERY */}
                </TabPanel>
                {/* END Details Gallery */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        
      </SimpleReactLightbox>
      </div>

      {/* all modal video and popup goes here */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      />
      {/* End Vimeo Modal Video */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="lm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Selena Gomez</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/8.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="lm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
