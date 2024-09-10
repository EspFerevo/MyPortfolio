// import React, { useRef, useEffect } from 'react';
// import Swiper from 'swiper';
// import './style.css';

// const BackgroundSlider = () => {
//  const swiperContainerRef = useRef(null);

//  useEffect(() => {
//   new Swiper(swiperContainerRef.current, {
//    loop: true,
//    autoplay: {
//     delay: 5000, // 5 seconds
//    },
//    effect: 'fade',
//    fadeEffect: {
//     crossFade: true,
//    },
//   });
//  }, []);

//  return (
//   <div className="swiper-container" ref={swiperContainerRef}>
//    <div className="swiper-wrapper">
//     <div className="swiper-slide" style={{ backgroundImage: 'url(./../../img/war/warimg1.jpeg)' }}></div>
//     <div className="swiper-slide" style={{ backgroundImage: 'url(./../../img/war/warimg2.jpeg)' }}></div>
//     <div className="swiper-slide" style={{ backgroundImage: 'url(./../../img/war/warimg3.jpg)' }}></div>
//     <div className="swiper-slide" style={{ backgroundImage: 'url(./../../img/war/warimg4.jpg)' }}></div>
//    </div>
//   </div>
//  );
// };

// export default BackgroundSlider;
