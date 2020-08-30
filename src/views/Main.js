import React from "react";
import Tags from "./Tags";
import Money from "./Money";
import Statistics from "./Statistics";
import Notfound from "./Notfound";
import Nav from "components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import styled from "styled-components";

const MainWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SwitchWrapper = styled.div`
  border: 1px solid green;
  flex: 1;
`;

function Main() {
  return (
    <Router>
      <MainWrapper>
        <SwitchWrapper>
          <Switch>
            <Redirect from="/" to="/tags" exact></Redirect>
            <Route path="/tags">
              <Tags />
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
        </SwitchWrapper>
        <Nav></Nav>
      </MainWrapper>
    </Router>
  );
}
export default Main;
