import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';
import './style.css';

const BackgroundSlider = () => {
    const swiperContainerRef = useRef(null);

    useEffect(() => {
        new Swiper(swiperContainerRef.current, {
            loop: true,
            autoplay: {
                delay: 5000, // 5 seconds
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
        });
    }, []);

    return (
        <div className="swiper-container" ref={swiperContainerRef}>
            <div className="swiper-wrapper">
                <div className="swiper-slide" style={{ backgroundImage: 'url(./)' }}></div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(/path/to/image2.jpg)' }}></div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(/path/to/image3.jpg)' }}></div>
                <div className="swiper-slide" style={{ backgroundImage: 'url(/path/to/image3.jpg)' }}></div>

            </div>
        </div>
    );
};

export default BackgroundSlider;
