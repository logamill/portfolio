import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rubyIcon from '../assets/images/assets/img/partners/1.png';
import nodejsIcon from '../assets/images/assets/img/partners/2.png';
import pythonIcon from '../assets/images/assets/img/partners/3.png';
import reactIcon from '../assets/images/assets/img/partners/4.png';
import railsIcon from '../assets/images/assets/img/partners/5.png';
import sqlIcon from '../assets/images/assets/img/partners/6.png';
import htmlIcon from '../assets/images/assets/img/partners/7.png';


export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul style={{ borderRadius: '15px', background: 'white'}}>
      <Slider {...settings}>
        <li className="brand-logo">
          <img src={rubyIcon} alt="partners brand" />
        </li>
        <li className="brand-logo">
          <img src={nodejsIcon} alt="partners brand" />
        </li>
        <li className="brand-logo">
          <img src={pythonIcon} alt="partners brand" />
        </li>
        <li className="brand-logo">
          <img src={reactIcon} alt="partners brand" />
        </li>
        <li className="brand-logo">
          <img src={railsIcon} alt="partners brand" />
        </li>
        <li className="brand-logo">
          <img src={sqlIcon} alt="partners brand" />
        </li>
        <li className="brand-logo">
          <img src={htmlIcon} alt="partners brand" />
        </li>
      </Slider>
    </ul>
  );
}
