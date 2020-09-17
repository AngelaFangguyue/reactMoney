import React from "react";
import Nav from "components/Nav";
import styled from "styled-components";

// const LayoutWrapper = styled.div`
//   height: 100vh;
//   display: flex;
//   main {
//     flex: 1;
//   }
// `;

const MainWrapper = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const SwitchWrapper = styled.div`
  border: 1px solid green;
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
`;

function Layout(props) {
  return (
    // <LayoutWrapper>
    //   {props.children}
    //   <Nav></Nav>
    // </LayoutWrapper>
    <MainWrapper>
      <SwitchWrapper>{props.children}</SwitchWrapper>
      <Nav></Nav>
    </MainWrapper>
  );
}
export default Layout;
