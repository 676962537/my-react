// 条件渲染
// 条件渲染有4种方式

import React from "react";
class IfRender extends React.Component{
  state = {
    showFlag:true
  }
  changeShow(){
    this.setState({
      showFlag:!this.state.showFlag
    })
  }
  render() {
    console.log("render function called");
    let element = null;
    if(this.state.showFlag){
      element = <div>展示 true</div>;
    }else{
      element = <div>展示 false</div>;
    }
    return (
        <div>
          <div onClick={(e) => this.changeShow(e)}>点击切换展示</div>
          {/*第1种方式*/}
          {this.state.showFlag ? (<div>展示 true</div>) : (<div>展示 false</div>)}
          {/*第2种方式*/}
          <div>{this.state.showFlag ? '展示 true' : '展示 false'}</div>
          {/*第3种方式*/}
          {element}
          {/*第4种方式*/}
          {this.state.showFlag && <div>展示 true</div>}
          {!this.state.showFlag && <div>展示 false</div>}
        </div>
    )
  }
}
export default IfRender
