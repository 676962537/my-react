import React, { useState,useEffect } from 'react';
function Example() {
  // Promise.race
  let ajax = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('ajax cpmpleted')
      },2000)
    })
  }
  let time = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('请求未完成，请重试！')
      },3000)
    })
  }
  Promise.race([ajax(),time()]).then((data) => {
    // console.log(data);
  })

  // promise.all await
  // promise.resolve promise.reject
  let sleep = (value,time) => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      },time)
    }))
  };
  let sleep2 = (value,time) => {
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        reject(value);
      },time)
    }))
  };
  let fn = async () => {
    // try{
    //   let data = await Promise.all([sleep(1,2000),sleep2(2,3000)]);
    //   console.log("await data:",data)
    // }catch(e){
    //   console.log("error:",e);
    // }
    let pro = Promise.resolve("hahaha");
    let date = await pro;
    console.log(date);
  }
  fn();
  return (
      <div>Promise</div>
  );
}
export default Example
