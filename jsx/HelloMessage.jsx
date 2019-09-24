import React, { Component } from 'react';
import xxxxxx from 'react-dom';
import Subcomponents from "./Subcomponents.jsx"
import Swiper from "swiper"
let render = xxxxxx.render;
class HelloMessage extends Component {
	componentDidMount(){
		var mySwiper = new Swiper ('.swiper-container', {

		})
	}
  render() {
    return (<div className="swiper-container">
			    <div className="swiper-wrapper">
			        <div className="swiper-slide" style={{background: "red"}}>Slide 1</div>
			        <div className="swiper-slide">Slide 2</div>
			        <div className="swiper-slide">Slide 3</div>
			    </div>
			</div>)
  }
}

export default HelloMessage