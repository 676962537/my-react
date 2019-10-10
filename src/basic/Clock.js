// class类型组件初识 以及state的使用

import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
class Clock extends Component{
  state = {
    date:new Date()
  }
  componentDidMount(){
    console.log("Clock",this.state.date);
    this.timeId = setInterval(() => {
      this.setState({
        date:new Date()
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timeId);
  }
  render(){
    return (<div>
      <div>Clock--{this.state.date.toLocaleTimeString()}--Clock</div>
    </div>)
  }
}
export default Clock
