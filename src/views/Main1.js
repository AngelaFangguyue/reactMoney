import React from "react";
import Tags from "./Tags1";
import Money from "./Money1";
//import Money1 from "./Money1";
import Statistics from "./Statistics1";
import Notfound from "./Notfound";
// import Nav from "components/Nav";
import { Tag } from "./Tag.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
//import styled from "styled-components";

// const MainWrapper = styled.div`
//   border: 2px solid black;
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
// `;

// const SwitchWrapper = styled.div`
//   border: 1px solid green;
//   flex: 1;
// `;

function Main1() {
  return (
    <Router>
      <Switch>
        <Redirect from="/" to="/tags" exact></Redirect>x
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route path="/tags/:tagId">
          <Tag />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
}
export default Main1;
