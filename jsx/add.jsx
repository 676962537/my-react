import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
class Add extends Component{
  state = {
    count:0
  }
  componentDidMount(){

  }
  componentWillUnmount(){

  }
  add = () => {
    this.setState({
      count:++this.state.count
    })
  }
  reduce = () => {
    this.setState({
      count:--this.state.count
    })
  }
  render(){
    return (<div>
      <div>点击次数:{this.state.count}</div>
      <div onClick={this.add}>添加</div>
      <div onClick={this.reduce}>减少</div>
    </div>)
  }
}
export default Add
