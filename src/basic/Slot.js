// 列表渲染

import React from 'react'

function Sub(props) {
  console.log("Sub props children:",props.children);
  return (<div>
    <div>我是Sub组件</div>
    <div>{props.children}</div>
  </div>)
}
function Sub2(props) {
  return (<div>
    <div>{props.left}</div>
    <div>我是Sub2组件</div>
    <div>{props.right}</div>
  </div>)
}
function Com(){
  return <div>我是Com组件</div>
}
function Slot (props){
  let left = <div>我是left</div>
  let right = <div>我是right</div>
  let compon = <Com />;
  return (
      <div>
        <Sub>
          <div>mahenan1</div>
          <div>mahenan2</div>
          <div>mahenan3</div>
          {compon}
        </Sub>
        <Sub2 left={left} right={compon}></Sub2>
      </div>
  )
}
export default Slot
