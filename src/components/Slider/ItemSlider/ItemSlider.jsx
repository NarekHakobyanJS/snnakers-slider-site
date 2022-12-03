import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./ItemSlider.scss"

export default class ItemSlider extends Component {
  
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
          {
            this.props.item.map(el => <div className='item-slider-item'>
            <img src={el.img} />
            <h3>{el.name}</h3>
            <div className='product-description'>
              <p>price : <b>{el.price}$</b></p>
            </div>
          </div>)
          }
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    item : state.productsPage.products
  }
}
export const ItemContainer = connect (mapStateToProps, null) (ItemSlider)
