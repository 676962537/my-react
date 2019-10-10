// 列表渲染

import React from 'react'

function Show(props) {
  if(props.count >= 100){
    return (<div>水开了</div>)
  }else{
    return (<div>水没开</div>)
  }
}

class App extends React.Component{
  state = {
    count:""
  }
  onchangeHandle(e) {
    this.setState({
      count:e.target.value
    })
  }
  render(){
    return (<div>
      <Stateimprovement count={this.state.count} changeHandle={(e) => this.onchangeHandle(e)}/>
      <Stateimprovement count={this.state.count} changeHandle={(e) => this.onchangeHandle(e)}/>
      <Show count={this.state.count}/>
    </div>)
  }
}

function Stateimprovement (props){
  return (<div>
    <input type="text" value={props.count} onChange={(e) => props.changeHandle(e)}/>
    <div>输入的值为:{props.count}</div>
  </div>)
}
export default App
