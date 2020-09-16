import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
const NumbersWrapper = styled.section`
  div {
    padding: 16px 5px 16px 12px;
    background-color: white;
    text-align: right;
  }
  button {
    width: 25%;
    height: 32px;
    float: left;
  }
  button:nth-child(12) {
    height: 64px;
    float: right;
  }
  button:nth-child(14) {
    width: 50%;
  }
`;

function NumbersSection() {
  return (
    <NumbersWrapper>
      <div className="inputNumber">100</div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>删除</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>清零</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>OK</button>
      <button>0</button>
      <button>.</button>
    </NumbersWrapper>
  );
}
export default NumbersSection;
