//setState是异步的方法，注意调用

import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
class Setstate extends Component {
  state = {
    count:0
  }
  add = () => {
    // this.setState({
    //   count:this.state.count + 1
    // })
    // this.setState({
    //   count:this.state.count + 1
    // })
    // this.setState({
    //   count:this.state.count + 1
    // })

    this.setState((prve) => {
      console.log("prve:",prve);
      console.log("this.props:",this.props);
      return {
        count:prve.count + 1
      }
    })
    // this.setState((prve) => {
    //   return {
    //     count:prve.count + 1
    //   }
    // })
    // this.setState((prve) => {
    //   return {
    //     count:prve.count + 1
    //   }
    // })
  }
  render() {
    return (<div>
      <div>{this.state.count}</div>
      <div onClick={this.add}>加3</div>
    </div>)
  }
}
export default Setstate
