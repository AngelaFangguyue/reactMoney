import React from "react";
import styled from "styled-components";
const Label = styled.label`
  border: 1px solid yellow;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    margin-right: 5px;
  }
  input {
    padding: 10px;
    flex: 1;
  }
`;
const Input = (props) => {
  return (
    <Label>
      <span>{props.label}</span>
      <input type="text" placeholder={props.ph} />
    </Label>
  );
};
export default Input;
