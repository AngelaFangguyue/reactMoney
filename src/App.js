import React from "react";
//import logo from "./logo.svg";
import "./App.scss";
//import style1 from "./style1.module.scss";
//import c from "./test1/Test1.js";
//console.log(aa);
//import styled from "styled-components";
//import Box from "components/Box";
import "components/Nav";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // IndexRoute,
} from "react-router-dom";
import Nav from "components/Nav";

// const ButtonGrey = styled.button`
//   color: red;
//   &:hover {
//     color: green;
//   }
// `;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Box>
//           <ButtonGrey>特别按钮</ButtonGrey>
//         </Box>
//         <br></br>
//         <button
//           style={{
//             width: "100px",
//             height: "40px",
//             borderRadius: "3px",
//             outline: "none",
//             border: "none",
//             cursor: "pointer",
//             background: "#abcdef",
//             color: "#fff",
//             marginBottom: "10px",
//           }}
//         >
//           button按钮
//         </button>
//         <div className={style1.testdiv}>css modules</div>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React=={c}
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div>
        <Nav></Nav>
        {/* <nav>
          <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">记账</Link>
            </li>
            <li>
              <Link to="/statstics">统计</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
          {/* <IndexRoute component={Money} /> */}
          {/* <Route exact path="/">
            <Tags />
          </Route> */}
          <Redirect from="/" to="/tags" exact></Redirect>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statstics">
            <Statstics />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          {/* <Redirect to="/login" /> */}
          {/* <Route path="/*"></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  return <h2>NotFound</h2>;
}

function Tags() {
  return <h2>Tags</h2>;
}

function Statstics() {
  return <h2>Statstics</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

export default App;
