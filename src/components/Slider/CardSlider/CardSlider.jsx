import React, { Component } from "react";
import Slider from "react-slick";
import "./CardSlider.scss"
export default class CardSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="card-slider">
        <h2>Top Snneakers</h2>
        <Slider {...settings}>
          <div className="card-slider-item">
            
          </div>
          <div className="card-slider-item">
           
          </div>
          <div className="card-slider-item">
            
          </div>
          <div className="card-slider-item">
            
          </div>
          <div className="card-slider-item">
            
          </div>
          <div className="card-slider-item">
            
          </div>
        </Slider>
      </div>
    );
  }
}