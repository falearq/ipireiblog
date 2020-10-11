import React, {  useState } from "react";
import Swiper from "react-id-swiper";
import "./Slider.css";
import 'swiper/css/swiper.css'

// images
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.png";
import slide3 from "../../images/slide3.png";

// slider configuration
const params = {
  containerClass: "swiper-container hero-slider",
  centeredSlides: true,
  grabCursor: true,
  speed: 2000,
  spaceBetween: 0,
  loop: true, 
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  
};

const HeroSlider = () => {
  const [swiper, setSwiper] = useState(null);
  const parallaxAmount = swiper ? swiper.width * 0.95 : 0;
  const parallaxOpacity = 0;
  return (
    <Swiper className='slider' {...params} getSwiper={setSwiper}>
      <div className="slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={slide1} alt="Familia"></img>
        </div>
        <div className="slide-content">
          <p className='slide-text'>Texto 1</p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={slide2} alt="Familia"></img>
        </div>
        <div className="slide-content">
          <p className='slide-text'>Texto 2</p>
        </div>
      </div>
      <div className="slide">
        <div
          className="slide-image"
          data-swiper-parallax={parallaxAmount}
          data-swiper-parallax-opacity={parallaxOpacity}
        >
          <img src={slide3} alt="Familia"></img>
        </div>
        <div className="slide-content">
          <p className='slide-text'>Texto 3</p>
        </div>
      </div>
    </Swiper>
  );
};

export default HeroSlider;
