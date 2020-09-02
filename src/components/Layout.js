import React from "react";
import Nav from "components/Nav";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  height: 100vh;
  display: flex;
  main {
    flex: 1;
  }
`;

function Layout() {
  return (
    <LayoutWrapper>
      <main></main>
      <Nav></Nav>
    </LayoutWrapper>
  );
}
export default Money1;
