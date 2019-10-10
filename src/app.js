import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import loadable from "@loadable/component";

import Clock from "./basic/Clock"
import Event from "./basic/Event"
import Setstate from "./basic/Setstate"
import IfRender from "./basic/ifRender"
import Props from "./basic/Props"
import ForRender from "./basic/ForRender"
import Input from "./basic/Input"
import Stateimprovement from "./basic/Stateimprovement"
import Slot from "./basic/Slot"

// import Index from "./route/index";
// import Topic from "./route/topic";
// import About from "./route/about";

// import { createBrowserHistory, createHashHistory } from 'history';
// const history = createHashHistory();
//
// // Get the current location.
// const location = history.location;
//
// console.log("history:",history);
//
// // Listen for changes to the current location.
// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
// });
//
// // Use push, replace, and go to navigate around.
// // history.push('/home', { some: 'state' });
//
// // To stop listening, call the function returned from listen().
// unlisten();


function Navigation(){
  return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><NavLink to="/index">Inbox</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/topic">Topic</NavLink></li>
          <li><NavLink to="/topic/1">Topic / 1</NavLink></li>
        </ul>
      </div>
  )
}
function Show(props) {
  console.log(props);
  return (<div>
    {props.match.params.id}
  </div>)
}
export default function App(props){
  return (
      <div>
          {/*<div>*/}
          {/*      <Props name={'mahenan'} />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <Clock />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <Event />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <Setstate name={"mahenan"} />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <IfRender />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <ForRender />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <Input />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <Stateimprovement />*/}
          {/*      <div>---------------------------------------</div>*/}
          {/*      <Slot />*/}
          {/*</div>*/}

        {/*<Switch>*/}
          <Navigation/>
          <Route path="/index" component={loadable(() => import( /* webpackChunkName: "index" */ "./route/index.js"))}/>
          <Route path="/about" component={loadable(() => import( /* webpackChunkName: "about" */ "./route/about.js"))}/>
          <Route path="/topic" component={loadable(() => import( /* webpackChunkName: "topic" */ "./route/topic.js"))}/>
          {/*<Route path="/:id" component={Show} />*/}
        {/*</Switch>*/}
      </div>
  )
}
