(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["rerender"],{

/***/ "./src/hook/rerender.js":
/*!******************************!*\
  !*** ./src/hook/rerender.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // 无状态组件 无hook的函数组件\n\nfunction NormalComponent() {\n  var count = 1;\n\n  function clickFn() {\n    count++;\n    console.log(\"clickFn:\", count);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubCom, {\n    count: count\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: function onClick() {\n      return clickFn();\n    }\n  }, \"\\u70B9\\u51FB\\u6211\"));\n} // // 带有hook的函数组件\n// function NormalComponent(){\n//   const [count,setCount] = useState(0);\n//   console.log(\"NormalComponent rerender\")\n//   return (<div>\n//     <div><SubCom count={count} /></div>\n//     <button onClick={() => setCount(count+1)}>点击我</button>\n//   </div>)\n// }\n//\n// // class组件\n// class NormalComponent extends React.Component{\n//   state = {\n//     count:1\n//   }\n//   clickFn(){\n//     this.setState({count:this.state.count + 1});\n//   }\n//   componentWillUpdate(){\n//     console.log(\"NormalComponent rerender\");\n//   }\n//   componentWillMount(){\n//     console.log(\"NormalComponent Mount\");\n//   }\n//   render(){\n//     return (\n//         <div>\n//           <div><SubCom count={this.state.count} /></div>\n//           <button onClick={() => this.clickFn()}>点击我</button>\n//         </div>\n//     )\n//   }\n// }\n\n\nfunction SubCom(props) {\n  console.log(\"SubCom rerender\");\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, props.count);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NormalComponent);\n\n//# sourceURL=webpack:///./src/hook/rerender.js?");

/***/ })

}]);