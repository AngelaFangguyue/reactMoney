import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
const TypesWrapper = styled.section`
  ul {
    border: 1px solid green;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      border: 1px solid red;
      flex: 1;
      text-align: center;
      padding: 16px;
      position: relative;
      /* &.selected {
        color: red;
      } */
      &.selected::after {
        display: block;
        content: "";
        width: 100%;
        border: 1px solid bisque;
        position: absolute;
        bottom: 0px;
        left: 0px;
        background-color: yellow;
      }
    }
  }
`;
function TypesSection(props) {
  const types = props.value;

  const typesMap = { 支出: "-", 收入: "+" };
  const typesAll = ["支出", "收入"];
  //const [types, setTypes] = useState("-");

  return (
    <TypesWrapper>
      {/* <ul>
        <li
          className={types === "-" ? "selected" : ""}
          onClick={() => {
            setTypes("-");
          }}
        >
          支出
        </li>
        <li
          className={types === "+" ? "selected" : ""}
          onClick={() => {
            setTypes("+");
          }}
        >
          收入
        </li>
      </ul> */}
      <ul
        onClick={(e) => {
          // console.log("ulul");
          // console.log(e.target.tagName, e.target.textContent);
          if (e.target.textContent === "支出") {
            // setTypes("-");
            props.onChange({ types: "-" });
          } else {
            // setTypes("+");
            props.onChange({ types: "+" });
          }
        }}
      >
        {typesAll.map((i) => {
          return (
            <li
              key={i}
              // onClick={() => {
              //   console.log("lili");
              // }}
              className={types === typesMap[i] ? "selected" : ""}
            >
              {i}
            </li>
          );
        })}
      </ul>
      {/* <ul>
        {typesAll.map((i) => (
          <li key={i} className={types === i ? "selected" : ""}  onClick={() => props.onChange(i)}>
            {typesMap[i]}
          </li>
        ))}
      </ul> */}
    </TypesWrapper>
  );
}
export default TypesSection;
