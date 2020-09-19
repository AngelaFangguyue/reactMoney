import React from "react";
// import Nav from "components/Nav";
import Input from "components/Input";
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
function NotesSection(props) {
  const note = props.value;
  //console.log("note:", note);
  //const [note, setNote] = useState("");
  //const inputRef = useRef();
  const getValue = (e) => {
    // setNote(inputRef.current.value);
    props.onChange({ note: e });
  };

  return (
    <NotesWrapper>
      <Input
        label1="备注"
        type1="text"
        ph="请输入备注"
        value1={note}
        onChange1={(e) => {
          //setNote(e.target.value);
          // props.onChange({ note: e.target.value });
          getValue(e);
        }}
      ></Input>
      {/* <label>
        {note}
        <span>备注</span>
        <input
          type="text"
          placeholder="请输入备注"
          value={note}
          onChange={(e) => {
            //setNote(e.target.value);
            props.onChange({ note: e.target.value });
          }}
        />
        {/* <input
          ref={inputRef}
          type="text"
          placeholder="请输入备注"
          defultvalue={note}
          onBlur={() => {
            getValue();
            //setNote(inputRef.current.value); //直接写setNote也可以
            //console.log("getValue");
          }}
        /> */}
      {/* </label> */}
    </NotesWrapper>
  );
}
export default NotesSection;
