import React, { Component } from "react";
import Slider from "react-slick";
import "./MainSlider.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";


export default class MainSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="main-slider">
        <Slider {...settings}>
          <div className="main-slider-item">
            <div className="main-slider-details">
            <h3>Jordan 4 Retro University Blue</h3>
            <NavLink to="/">
            get to know the model in more detail
            </NavLink>
            </div>
          </div>


          <div className="main-slider-item item-2">
            <div className="main-slider-details">
            <h3>The Air Jordan 4 “Lightning”</h3>
            <NavLink to="/">
            One Of The Biggest Retro Grails In History, Is Coming Back
            </NavLink>
            </div>
          </div>

          <div className="main-slider-item item-3">
            <div className="main-slider-details">
            <h3>Air Jordan I</h3>
            <NavLink to="/">
            | Designer : Peter Moore | Released : 1985 | Original Price : $65
            </NavLink>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}