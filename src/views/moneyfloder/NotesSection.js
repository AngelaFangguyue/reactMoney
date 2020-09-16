import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
const NotesWrapper = styled.section`
  border: 1px solid yellow;
  padding: 10px 0 10px 10px;
  label {
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
  }
`;
function NotesSection() {
  return (
    <NotesWrapper>
      <label>
        <span>备注</span>
        <input type="text" placeholder="请输入备注" />
      </label>
    </NotesWrapper>
  );
}
export default NotesSection;
