import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
const TagsWrapper = styled.section`
  flex: 1%;
  background-color: #fff;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 10px 20px 10px;
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
function TagsSection() {
  return (
    <TagsWrapper>
      <ul>
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <button>新增标签</button>
    </TagsWrapper>
  );
}
export default TagsSection;
