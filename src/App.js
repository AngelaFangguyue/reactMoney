import React from "react";
import "./App.scss";
//import logo192 from "./logo192.png";
// import logo from "./logo.svg";
import x from "./logo.svg";

//import logo1 from "./test/logo1.png";
// import style1 from "./style1.module.scss";
// import c from "./test1/Test1.js";

// import styled from "styled-components";
// import Box from "components/Box";
//import Main from "views/Main";
import Main1 from "views/Main1";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useRouteMatch,
//   useParams,
// } from "react-router-dom";
//import Nav from "components/Nav";
// console.log("aa:", logo1);
//console.log("aa:", logo);
// const ButtonGrey = styled.button`
//   color: red;
//   &:hover {
//     color: green;
//   }
// `;

console.log("app:x", x);

function App() {
  // return (
  //   <div>
  //     <ul>
  //       <li>1</li>
  //       <li>11</li>
  //       <li>111</li>
  //     </ul>
  //     <Main1></Main1>
  //   </div>
  // );

  return <Main1></Main1>;
  // // eslint-disable-next-line
  // return <Main></Main>;
  // return (
  //   <div>
  //     <svg>
  //       <use xlinkHref="#logo"></use>
  //     </svg>
  //     <hr></hr>
  //     {/* <img src={"./logo1.png"} className="App-logo" alt="./logo1.png" /> */}
  //     <img src={logo1} className="App-logo" alt="logo1" />
  //     <hr></hr>
  //     <img src={"./logo192.png"} className="App-logo" alt="./logo192.png" />
  //     <img src={logo192} className="App-logo" alt="logo192" />
  //     <hr></hr>
  //     {/* <img src={"./logo.svg"} className="App-logo" alt="logo" />2 */}
  //     {/* <img src={logo} className="App-logo" alt="logo" />3 */}
  //     <Main></Main>
  //   </div>
  //);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  // <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React=={c}
  //       </a>
  //       <Box>
  //         <ButtonGrey>特别按钮</ButtonGrey>
  //       </Box>
  //       <br></br>
  //       <button
  //         style={{
  //           width: "100px",
  //           height: "40px",
  //           borderRadius: "3px",
  //           outline: "none",
  //           border: "none",
  //           cursor: "pointer",
  //           background: "#abcdef",
  //           color: "#fff",
  //           marginBottom: "10px",
  //         }}
  //       >
  //         button按钮
  //       </button>
  //       <div className={style1.testdiv}>css modules</div>
  //     </header>
  //   </div>
  // );
}

//function App() {
//return <Main></Main>;
//   <Router>
//     <div>
//       <Nav></Nav>
//       <Switch>
//         <Redirect from="/" to="/tags" exact></Redirect>
//         <Route path="/tags">
//           <Tags />
//         </Route>
//         <Route path="/money">
//           <Money />
//         </Route>
//         <Route path="/statstics">
//           <Statstics />
//         </Route>
//         <Route path="*">
//           <NotFound />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
// );
//}

// function NotFound() {
//   return <h2>NotFound</h2>;
// }

// function Tags() {
//   return <h2>Tags</h2>;
// }

// function Statstics() {
//   return <h2>Statstics</h2>;
// }

// function Money() {
//   return <h2>Money</h2>;
// }

export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <Switch className={"xx"}>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
