import React, { useState,useEffect } from 'react';

function Example1(props) {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  // 首次渲染和dom更新都会执行
  useEffect(() => {
    console.log("Example1 components updated!");
    return () => {
      // 组件销毁/卸载的时候会执行
      console.log("Example1 components destory");
    }
  });
  return (
      <div>
        <div>我是Example1 count:{count}</div>
        <button onClick={() => setCount(count+1)}>增加Example1的count</button>
        <div>props.name:----{props.name}</div>
      </div>
  );
}
function Example2() {
  // 声明一个叫 “count” 的 state 变量。
  const [count, setCount] = useState(0);
  // 首次渲染和dom更新都会执行
  useEffect(() => {
    // console.log("Example2 components updated!");
    // return () => {
    //   // 组件销毁/卸载的时候会执行
    //   console.log("Example2 components destory");
    // }
    setCount(2);
    console.log("count:",count);
  });
  return (
      <div>
        <div>我是Example2 count:{count}</div>
        <button onClick={() => setCount(count+1)}>增加Example2的count</button>
      </div>
  );
}
function Example() {
  // 声明一个叫 “count” 的 state 变量。
  const [show, setShow] = useState(true);
  const [name, setName] = useState("mahenan");
  return (
      <div>
        <div>
          {show ? <Example1 name={name} /> : <Example2/>}
        </div>
        <button onClick={() => setShow(!show)}>改变show</button>
        <button onClick={() => setName(name + "mahenan")}>改变name</button>
      </div>
  );
}
export default Example2
