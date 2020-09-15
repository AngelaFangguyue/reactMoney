import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//import "./views/promise2.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
// eslint-disable-next-line
//require("./views/Promise3.js");
let Promise = require("./views/Promise3.js");
console.log("Promise:", Promise);
// let promiseTest = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve(45);
//   }, 5000);
// });

// promiseTest
//   .then(
//     (datas) => {
//       console.log("第一个then方法》成功:", datas);
//       // eslint-disable-next-line
//       throw "11";
//       //return 12;
//     },
//     (dataf) => {
//       console.log("第一个then方法》失败:", dataf);
//     }
//   )
//   .then(
//     (datas) => {
//       console.log("第二个then方法》成功result:", datas);
//     },
//     (dataf) => {
//       console.log("第二个then方法》失败error:", dataf);
//     }
//   );

// promiseTest
//   .then(
//     (datas) => {
//       console.log("第一个then方法》成功:", datas);
//       // eslint-disable-next-line
//       throw "11";
//       //return 12;
//     },
//     (dataf) => {
//       console.log("第一个then方法》失败:", dataf);
//     }
//   )
//   .then(
//     (datas) => {
//       console.log("第san个then方法》成功result:", datas);
//     },
//     (dataf) => {
//       console.log("第san个then方法》失败error:", dataf);
//     }
//   );

// promiseTest.then(
//   (data) => {
//     console.log("第二个then方法》成功:", data);
//   },
//   (data) => {
//     console.log("第二个then方法》失败:", data);
//   }
// );
