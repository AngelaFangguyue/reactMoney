//import { createId } from "lib/createId";
import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
//import Tags from "views/Tags1";
import useTags from "useTags";

const TagsWrapper = styled.section`
  flex: 1;
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
  // const [tags, setTags] = useState(["衣", "食", "住", "行"]);
  const { tags, addTag } = useTags();

  // const [selectedTagIds, setSelectedTags] = useState(["衣"]);
  const selectedTagIds = props.value;
  // console.log("selectedTagIds:", selectedTagIds);
  //const setSelectedTags = props.onChange;

  // const addTags = () => {
  //   let newTag = window.prompt("请输入新的标签名");

  //   if (newTag) {
  //     // let obj = { id: Math.random(), name: newTag };

  //     setTags([...tags, { id: createId(), name: newTag }]);
  //   }
  //   console.log("tags:", tags);
  // };
  const toggleSelected = (id) => {
    if (selectedTagIds.indexOf(id) > -1) {
      //setSelectedTags({ selectTags: selectedTagIds.filter((i) => i !== tag) });
      props.onChange({ tagIds: selectedTagIds.filter((i) => i !== id) });
    } else {
      //setSelectedTags({ selectTags: [...selectedTagIds, tag] });
      props.onChange({ tagIds: [...selectedTagIds, id] });
    }
    console.log("2>tags:", id, selectedTagIds);
  };
  const addStyle = (id) => {
    return selectedTagIds.indexOf(id) > -1 ? "selected" : "";
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
            key={i.id}
            onClick={() => {
              console.log("0>tags:", i.id, i.name, selectedTagIds);
              toggleSelected(i.id);
              console.log("1>tags:", i.id, i.name, selectedTagIds);
            }}
            //className={selectedTagIds.indexOf(i) > -1 ? "selected" : ""}
            className={addStyle(i.id)}
          >
            {i.name}
          </li>
        ))}
      </ul>
      <button
        // onClick={() => {
        //   addTag();
        //   //console.log("button", tags);
        // }}
        onClick={addTag}
      >
        新增标签
      </button>
    </TagsWrapper>
  );
}
export default TagsSection;
