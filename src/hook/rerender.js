import React, { useState,useEffect } from 'react';


// 无状态组件 无hook的函数组件
function NormalComponent(){
  let count = 1;
  function clickFn(){
    count++;
    console.log("clickFn:",count);
  }
  return (<div>
    <div><SubCom count={count} /></div>
    <button onClick={() => clickFn()}>点击我</button>
  </div>)
}

// // 带有hook的函数组件
// function NormalComponent(){
//   const [count,setCount] = useState(0);
//   console.log("NormalComponent rerender")
//   return (<div>
//     <div><SubCom count={count} /></div>
//     <button onClick={() => setCount(count+1)}>点击我</button>
//   </div>)
// }
//
// // class组件
// class NormalComponent extends React.Component{
//   state = {
//     count:1
//   }
//   clickFn(){
//     this.setState({count:this.state.count + 1});
//   }
//   componentWillUpdate(){
//     console.log("NormalComponent rerender");
//   }
//   componentWillMount(){
//     console.log("NormalComponent Mount");
//   }
//   render(){
//     return (
//         <div>
//           <div><SubCom count={this.state.count} /></div>
//           <button onClick={() => this.clickFn()}>点击我</button>
//         </div>
//     )
//   }
// }

function SubCom(props){
  console.log("SubCom rerender");
  return (<div>{props.count}</div>)
}
export default NormalComponent
