//import React from "react";
import React, { useState } from "react";
// import Nav from "components/Nav";
//import styled from "styled-components";
import Layout from "components/Layout";
import TagsSection from "./moneyfloder/TagsSection";
import NumbersSection from "./moneyfloder/NumbersSection";
import NotesSection from "./moneyfloder/NotesSection";
import TypesSection from "./moneyfloder/TypesSection.jsx";

// const Layout = styled.div`
//   height: 100vh;
//   display: flex;
//   main {
//     flex: 1;
//   }
// `;

// const TagsSection = styled.section`
//   flex: 1%;
//   background-color: #fff;
//   border: 1px solid red;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
//   padding: 10px 10px 20px 10px;
//   ul {
//     display: flex;
//     padding: 5px 5px 5px 0;
//     flex-wrap: wrap;
//     li {
//       cursor: pointer;
//       padding: 5px;
//       border: 1px solid gray;
//       margin: 5px 15px 5px 0;
//       border-radius: 5px;
//     }
//   }
//   button {
//     padding: 5px;
//     /* width: inherit; */
//     /* align-self: center; */
//   }
// `;
// const NotesSection = styled.section`
//   border: 1px solid yellow;
//   padding: 10px 0 10px 10px;
//   label {
//     border: 1px solid yellow;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     span {
//       margin-right: 5px;
//     }
//     input {
//       padding: 10px;
//       flex: 1;
//     }
//   }
// `;
// const TypesSection = styled.section`
//   ul {
//     border: 1px solid green;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     li {
//       border: 1px solid red;
//       flex: 1;
//       text-align: center;
//       padding: 16px;
//     }
//   }
// `;
// const NumbersSection = styled.section`
//   div {
//     padding: 16px 5px 16px 12px;
//     background-color: white;
//     text-align: right;
//   }
//   button {
//     width: 25%;
//     height: 32px;
//     float: left;
//   }
//   button:nth-child(12) {
//     height: 64px;
//     float: right;
//   }
//   button:nth-child(14) {
//     width: 50%;
//   }
// `;

function Money1() {
  const [selected, setSelected] = useState({
    tags: ["衣"],
    note: "",
    types: "-",
    output: "0",
  });

  function x(obj) {
    setSelected({ ...selected, ...obj });
  }

  return (
    <Layout>
      {/* <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="请输入备注" />
        </label>
      </NotesSection>
      <TypesSection>
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </TypesSection>
      <NumbersSection>
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
      </NumbersSection> */}
      {/* // value={selected.tags}
      // onChange={(obj) => {
      //   setSelected({ ...selected, ...obj });
      // }} */}
      <NumbersSection
        value={selected.output}
        onChange={(obj) => {
          //setSelected({ ...selected, output: output });
          x(obj);
        }}
      >
        {/* <div className="inputNumber">100</div>
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
        <button>.</button> */}
      </NumbersSection>
      <TypesSection
        value={selected.types}
        onChange={(obj) => {
          //setSelected({ ...selected, types: types });
          x(obj);
        }}
      >
        {/* <ul>
          <li>支出</li>
          <li>收入</li>
        </ul> */}
      </TypesSection>
      <NotesSection
        value={selected.note}
        onChange={(obj) => {
          //setSelected({ ...selected, note: note });
          x(obj);
        }}
      >
        {/* <label>
          <span>备注</span>
          <input type="text" placeholder="请输入备注" />
        </label> */}
      </NotesSection>
      <TagsSection
        value={selected.tags}
        onChange={(obj) => {
          //setSelected({ ...selected, tags: tags });
          x(obj);
        }}
      >
        {/* <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button> */}
      </TagsSection>
      {selected.tags.join("")}
      {selected.note}
      {selected.types}
      {selected.output}
    </Layout>
  );
}
export default Money1;
