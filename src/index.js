import React, { Component } from 'react';
import { render,findDOMNode } from 'react-dom';
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import App from "./app"

render( (
    <HashRouter>
      <App/>
    </HashRouter>
), document.getElementById('mountNode'));

