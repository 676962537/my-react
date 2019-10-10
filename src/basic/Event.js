// 绑定事件 定义事件

import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
class Event extends Component{
  state = {
    count:0
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  add = (index,e) => {
    console.log("add function called:",index);
    console.log("add function called:",e);
    console.log("add function called:",this);
    this.setState({
      count:++this.state.count
    })
  }
  reduce(name,e){
    console.log("reduce function called:",name);
    console.log("reduce function called:",e);
    console.log("reduce function called:",this);
    this.setState({
      count:--this.state.count
    })
  }
  render(){
    return (<div>
      <div>点击次数:{this.state.count}</div>
      <div onClick={(e) => this.add(1234, e)}>添加</div>
      <div onClick={(e) => this.reduce("mahenan",e)}>减少</div>
    </div>)
  }
}
export default Event
