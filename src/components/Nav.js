//import styled from "styled-components";

import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
// eslint-disable-next-line
//import x from "icons/search.svg";
//import cl"icons/search.svg";
//console.log("xx:", x);
//require("icons/tag.svg");

import Icon from "./Icon";

const importAll = (requireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("icons", true, /\.svg$/));
} catch {}

const Navwrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    li {
      flex: 1;
      border: 2px solid pink;
      padding: 5px 0;
      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
          /* cursor: pointer; */
          margin-bottom: 4px;
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
        }
      }
    }
  }
`;

function Nav() {
  return (
    <Navwrapper>
      <ul>
        <li>
          {/* <svg className="icon">
            <use xlinkHref="#tag"></use>
          </svg> */}

          <NavLink to="/tags" activeClassName="selected">
            <Icon name="#tag"></Icon>
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          {/* <svg className="icon">
            <use xlinkHref="#search"></use>
          </svg> */}

          <NavLink to="/money" activeClassName="selected">
            <Icon name="#search"></Icon>
            <span>记账</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="#tag"></Icon>
            <span>统计</span>
          </NavLink>
        </li>
      </ul>
    </Navwrapper>
  );
}

export default Nav;
