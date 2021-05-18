import React, { useState, useEffect, useRef } from 'react';
import { ImageData } from './ImageData';
import './ImageSlider.css';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const autoPlayRef = useRef();

    useEffect(() => {
        autoPlayRef.current = nextSlide
      });

    useEffect(() => {
        const play = () => {
            autoPlayRef.current();
        };

        const interval = setInterval(play, 2500)
        return () => clearInterval(interval)
      }, []);

    if (!Array.isArray(slides) || slides.length <= 0){
        return null;
    };

    

    return (
        <div className="slider">
            {ImageData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active': 'slide'} key={index} >
                        {index === current && (<img src={slide.image} alt="" className="slide-image" />)}
                    </div>
                );
            })};
        </div>
    );
};

export default ImageSlider;
