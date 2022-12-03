import React from 'react'
import "./HomePage.scss"
import MainSlider from '../../components/Slider/MainSlider/MainSlider'
import { ItemContainer } from '../../components/Slider/ItemSlider/ItemSlider'
function HomePage() {
  return (
    <div>
      < MainSlider />
      <div className='card-slider-block'>
        <ItemContainer />
      </div>
    </div>
  )
}

export default HomePage