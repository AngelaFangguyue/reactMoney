//import styled from "styled-components";

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navwrapper = styled.nav`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    li {
      flex: 1;
      border: 2px solid pink;
      padding: 10px 0;
    }
  }
`;

function Nav() {
  return (
    <Navwrapper>
      <ul>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </Navwrapper>
  );
}

export default Nav;
