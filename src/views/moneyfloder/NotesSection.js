import React, { useState, useRef } from "react";
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
  const [note, setNote] = useState("");
  const inputRef = useRef();
  const getValue = () => {
    setNote(inputRef.current.value);
  };

  return (
    <NotesWrapper>
      <label>
        {note}
        <span>备注</span>
        {/* <input
          type="text"
          placeholder="请输入备注"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        /> */}
        <input
          ref={inputRef}
          type="text"
          placeholder="请输入备注"
          defultvalue={note}
          onBlur={() => {
            getValue();
            //setNote(inputRef.current.value); //直接写setNote也可以
            //console.log("getValue");
          }}
        />
      </label>
    </NotesWrapper>
  );
}
export default NotesSection;
