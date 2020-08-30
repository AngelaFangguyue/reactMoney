//import styled from "styled-components";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // IndexRoute,
} from "react-router-dom";
// const Nav = styled.nav``;

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/tags">标签1</Link>
        </li>
        <li>
          <Link to="/money">记账1</Link>
        </li>
        <li>
          <Link to="/statstics">统计1</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
