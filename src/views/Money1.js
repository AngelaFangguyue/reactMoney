import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
import Layout from "components/Layout";

// const Layout = styled.div`
//   height: 100vh;
//   display: flex;
//   main {
//     flex: 1;
//   }
// `;

const TagsSection = styled.section`
  background-color: #fff;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  ul {
    display: flex;
    padding: 5px 5px 5px 0;
    flex-wrap: wrap;
    li {
      cursor: pointer;
      padding: 5px;
      border: 1px solid gray;
      margin: 5px 15px 5px 0;
      border-radius: 5px;
    }
  }
  button {
    padding: 5px;
    /* width: inherit; */
    /* align-self: center; */
  }
`;
const NotesSection = styled.section`
  border: 1px solid yellow;
  padding: 10px;
  label {
    border: 1px solid yellow;
    display: flex;

    span {
      margin-right: 20px;
    }
    input {
      padding: 10px;
      flex: 1;
    }
  }
`;
const TypesSection = styled.section``;
const NumbersSection = styled.section``;

function Money1() {
  return (
    <Layout>
      <TagsSection>
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
      </NumbersSection>
    </Layout>
  );
}
export default Money1;
