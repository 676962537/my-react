import React, { useState,useEffect } from 'react';

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  const [name, setName] = useState("mahenan");
  // const ageArr = useState(20);
  // console.log("ageArr:",ageArr);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  useEffect(() => {
    console.log("components updated!");
  });
  // document.title = `You clicked ${count} times`;
  // console.log("components updated!");
  return (
      <div>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={(e) => setCount(count + 1,e)}>
            Click me
          </button>
        </div>
        <div>--------------------------------</div>
        <div>
          <div>{name}</div>
          <button onClick={() => setName("chenhong")}>改变name变量为chenhong</button>
          <button onClick={() => setName(12)}>改变name变量为mahenan</button>
        </div>
      </div>
  );
}
// class Example extends React.Component{
//     state = {
//       count:0
//     }
//     clickFn(){
//       this.setState({
//         count:this.state.count+1
//       })
//     }
//     render(){
//       return (<div>
//         <div>{this.state.count}</div>
//         <div onClick={(e) => this.clickFn(e)}>click me</div>
//       </div>)
//     }
// }
export default Example
