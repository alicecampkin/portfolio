import React, { Component } from "react"
import Swiper from "swiper"
import "swiper/css/swiper.min.css"

export default class Slider extends Component {
  componentDidMount() {
    this.swiper = new Swiper(".swiper-container", {
      cssMode: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      grabCursor: true,
      simulateTouch: true,
      mousewheel: true,
      keyboard: true,
      slidesPerColumn: 2,

      breakpoints: {
        768: {
          slidesPerColumn: 1,
          spaceBetween: 0,
          loop: true,
        },
      },
    })
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">{this.props.children}</div>

        <div className="swiper-button-next swiper-controls"></div>
        <div className="swiper-button-prev swiper-controls"></div>
        <div className="swiper-pagination swiper-controls"></div>
      </div>
    )
  }
}
