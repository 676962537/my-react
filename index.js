import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
// import HelloMessage from "./jsx/HelloMessage.jsx"
import Subcomponents from "./jsx/Subcomponents.jsx"
import Clock from "./jsx/Clock.jsx"
import Add from "./jsx/add.jsx"
import Setstate from "./jsx/Setstate.jsx"
let name = 'let11 22222 mahenan';
function App(){
  return (
      <div>
        <Subcomponents name={name}></Subcomponents>
        <Clock></Clock>
        <Add></Add>
        <Setstate name={"mahenan"}></Setstate>
      </div>
  )
}
render( <App></App> , document.getElementById('mountNode'));

