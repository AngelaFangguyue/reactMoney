import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
const NumbersWrapper = styled.section`
  $bg: #f9f9f9;
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
  button:nth-child(13) {
    height: 64px;
    float: right;
  }
  button:nth-child(15) {
    width: 50%;
  }
  button:nth-child(2) {
    /* background-color: darkgreen(); */
    /* background: $bg; */
    background-color: #f2f2f2;
  }
  button:nth-child(3),
  button:nth-child(6) {
    /* background-color: yellow;*/
    /* background: darken($bg, 4%); */
    background-color: #e0e0e0;
  }

  button:nth-child(4),
  button:nth-child(7),
  button:nth-child(10) {
    /* background-color: green; */
    /* background-color: darken($bg, 8%); */
    background-color: #d3d3d3;
  }
  button:nth-child(5),
  button:nth-child(8),
  button:nth-child(11) {
    /* background-color: blue; */
    /* background: darken($bg, 8%); */
    background-color: #c1c1c1;
  }
  button:nth-child(9),
  button:nth-child(12),
  button:nth-child(14) {
    /* background-color: pink; */
    background-color: #b8b8b8;
  }
  button:nth-child(13) {
    /* background-color: orange; */
    background-color: #9a9a9a;
  }
  button:nth-child(15) {
    background-color: #a9a9a9;
  }
`;

function NumbersSection(props) {
  const output = props.value;
  // const [output, _setOutput] = useState("0");

  const setOutput = (n) => {
    if (n.length > 16) {
      n = n.slice(0, 16);
    } else if (n.length === 0) {
      n = "0";
    }
    //_setOutput(n);
    props.onChange({ output: n });
  }; //控制输入的字符长度
  const getOutput = (e) => {
    // console.log("e:", e.target);
    // console.log("e:", e.target.tagName);
    // console.log("e:", e.target.textContent);
    let n = e.target.textContent;
    switch (n) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        if (output === "0") {
          setOutput(n);
        } else {
          setOutput(output + n);
        }
        break;
      case ".":
        if (output.indexOf(".") > -1) return;
        //if (output === "0") return;
        setOutput(output + ".");
        break;
      case "删除":
        //if (output === "0") return;
        if (output.length === 1) {
          setOutput("0");
          return;
        }
        setOutput(output.slice(0, -1));
        break;
      case "清零":
        setOutput("0");
        break;
      case "OK":
        console.log("ok");
        break;
      default:
        return;
    }
  };

  return (
    <NumbersWrapper
      onClick={(e) => {
        getOutput(e);
      }}
    >
      <div className="inputNumber">{output}</div>
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
