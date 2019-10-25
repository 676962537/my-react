import React, { useState,useEffect } from 'react';

function Example1() {
  const name = useCustomerHook(1);
  return (
      <div>
        我是Example1 {name}
      </div>
  );
}
function Example2() {
  const name = useCustomerHook(2);
  return (
      <div>
        我是Example2 {name}
      </div>
  );
}
// 自定义hook/自定义函数？？？
function useCustomerHook(id){
  let [name,setName] = useState(0);
  useEffect(() => {
    setName(name+1);
    console.log("useCustomerHook useEffect");
    // console.log(props);
  },[]);
  return `${name} ${id}`;
}

function Example() {
  return (
      <div>
        <Example1/>
        <Example2/>
      </div>
  );
}

// class Todos extends React.Component {
//   state = {
//     unseen:"hahaha"
//   }
//   componentDidMount() {
//     setInterval(() => {
//       this.setState(() => {
//         console.log('setting state');
//         return { unseen: "does not display" }
//       });
//     }, 1000);
//   }
//   componentWillUpdate(){
//     console.log('componentWillUpdate');
//   }
//   render() {
//     console.log('render called');
//     return (<div>{this.state.unseen}</div>);
//   }
// }

export default Example
