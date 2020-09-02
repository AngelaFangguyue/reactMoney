import React from "react";
import Nav from "components/Nav";
import styled from "styled-components";

const Layout = styled.div`
  height: 100vh;
  display: flex;
  main {
    flex: 1;
  }
`;

function Money1() {
  return (
    <Layout>
      <main>
        <h2>Money</h2>
      </main>
      <Nav></Nav>
    </Layout>
  );
}
export default Money1;
