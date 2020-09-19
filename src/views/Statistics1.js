import React, { useState } from "react";
// import Nav from "components/Nav";
// import styled from "styled-components";
import Layout from "components/Layout";

function Statistics() {
  console.log("statistics");
  const [q, setQ] = useState(10);
  console.log("q:", q, "setQ:", setQ);
  // console.log("q:");
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}
export default Statistics;
