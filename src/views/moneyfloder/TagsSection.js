import React, { useState } from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
//import Tags from "views/Tags1";
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
      &.selected {
        background-color: orange;
      }
    }
  }
  button {
    padding: 5px;
    /* width: inherit; */
    /* align-self: center; */
  }
`;
function TagsSection(props) {
  // console.log("props:", props.value);
  const [tags, setTags] = useState(["衣", "食", "住", "行"]);
  // const [selectedTags, setSelectedTags] = useState(["衣"]);
  const selectedTags = props.value;
  // console.log("selectedTags:", selectedTags);
  //const setSelectedTags = props.onChange;

  const addTags = () => {
    let newTag = window.prompt("请输入新的标签名");
    if (newTag) {
      setTags([...tags, newTag]);
    }
  };
  const toggleSelected = (tag) => {
    if (selectedTags.indexOf(tag) > -1) {
      //setSelectedTags({ selectTags: selectedTags.filter((i) => i !== tag) });
      props.onChange({ tags: selectedTags.filter((i) => i !== tag) });
    } else {
      //setSelectedTags({ selectTags: [...selectedTags, tag] });
      props.onChange({ tags: [...selectedTags, tag] });
    }
    console.log("2>tags:", tag, selectedTags);
  };
  const addStyle = (i) => {
    return selectedTags.indexOf(i) > -1 ? "selected" : "";
  };

  return (
    <TagsWrapper>
      <ul>
        {/* <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li> */}
        {tags.map((i) => (
          <li
            key={i}
            onClick={() => {
              console.log("0>tags:", i, selectedTags);
              toggleSelected(i);
              console.log("1>tags:", i, selectedTags);
            }}
            //className={selectedTags.indexOf(i) > -1 ? "selected" : ""}
            className={addStyle(i)}
          >
            {i}
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          addTags();
          console.log("button", tags);
        }}
      >
        新增标签
      </button>
    </TagsWrapper>
  );
}
export default TagsSection;
