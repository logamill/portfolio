import React from "react";
import dev from '../assets/images/assets/img/svg/social/dev.svg';
import linkedIn from '../assets/images/assets/img/svg/social/linkedin.svg';
import github from '../assets/images/assets/img/svg/social/github.svg';
import insta from '../assets/images/assets/img/svg/social/instagram-2.svg';
import tiktok from '../assets/images/assets/img/svg/social/tik-tok.svg';


const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/logan-miller-b23852145",
  },
  { iconName: "github", link: "https://github.com/logamill" },
  {
    iconName: {dev},
    link: "https://dev.to/logamill",
  },
  { iconName: "instagram-2", link: "https://instagram.com/logamill" },
  {
    iconName: "tik-tok",
    link: "https://www.tiktok.com/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social">
          <li key='1'>
            <a href="https://www.linkedin.com/in/logan-miller-b23852145" target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={linkedIn}
                alt="social"
              ></img>
            </a>
          </li>
          <li key='2'>
            <a href="https://github.com/logamill" target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={github}
                alt="social"
              ></img>
            </a>
          </li>
          <li key='3'>
            <a href="https://dev.to/logamill" target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={dev}
                alt="social"
              ></img>
            </a>
          </li>
          <li key='4'>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={insta}
                alt="social"
              ></img>
            </a>
          </li>
          <li key='5'>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={tiktok}
                alt="social"
              ></img>
            </a>
          </li>
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
