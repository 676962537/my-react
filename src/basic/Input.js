// 列表渲染

import React from 'react'
class Input extends React.Component{
  state = {
    value:''
  }
  change(e){
    this.setState({
      value:e.target.value
    })
  }
  changeText(e){
    this.setState({
      value:"mahenan"
    })
  }
  render(){
    return (<div>
      <div onClick={(e) => this.changeText(e)}>改变value为mahenan</div>
      <div>{this.state.value}</div>
      <input type="text" value={this.state.value} onChange={(e) => this.change(e)}/>
    </div>)
  }
}
export default Input
