import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
class Subcomponents extends Component {
  constructor(props){
      super(props);
      // this.state = { liked: false };
      // console.log(props);
      // console.log(this.props);
  }
  componentDidMount(){
      const el = findDOMNode(this);
      // console.log(el)
      // console.log(this.refs.objspan);
  }
  clickFn(){
    // console.log(this);
  }
  render() {
    return <div onClick={this.clickFn.bind(this)}><div className='chenhong'><span ref="objspan">Hello everyone {this.props.name}</span></div></div>;
  }
}

export default Subcomponents
