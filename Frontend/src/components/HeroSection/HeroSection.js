/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './HeroSection.css';
import Slider from "react-slick";

import coco from '../../assets/img/Movies/coco.jpg';
import lucaposter from '../../assets/img/Movies/lucaposter.jpg';
import eternals from '../../assets/img/Movies/eternals.jpg';
import cruella from '../../assets/img/Movies/cruella.jpg';
import bridgerton from '../../assets/img/TV Shows/bridgerton.jpg';
import shadowandbone from '../../assets/img/TV Shows/shadow&bone.jpg';
import rickandmorty from '../../assets/img/TV Shows/rickandmorty.jpg';
import loki from '../../assets/img/TV Shows/loki.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const list = [
    coco, eternals, cruella, lucaposter,
    bridgerton, shadowandbone, rickandmorty, loki
]

const HeroSection = () => {

    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        className: "slideImg"
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {list.map((data) => (
                    <div>
                        <img className="slideImg" src={data} height="500px" />
                    </div>
                ))}
            </Slider>
        </div>

    );
}

export default HeroSection