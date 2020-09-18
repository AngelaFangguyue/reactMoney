import Layout from "components/Layout.js";
import React from "react";
import { useParams } from "react-router-dom";
// import Nav from "components/Nav";
import styled from "styled-components";
import useTags from "../useTags.js";
import Icon from "../components/Icon.js";
import Button from "../components/Button.js";
import Center from "../components/Center.js";
import Space from "../components/Space.js";
import Input from "../components/Input.js";
//console.log("useTags", useTags);
// const TagWrapper = styled.div`
//   border: 1px solid red;
// `;
const TopBar = styled.div`
  padding: 15px 10px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;
const InputWrapper = styled.div`
  margin-top: 8px;
  padding: 12px 0;
  background-color: white;
`;

const Tag = () => {
  let { tagId } = useParams();
  tagId = parseInt(tagId);

  // const { tags, setTags, findTag, findTagIndex, updateTag } = useTags();
  const { findTag, updateTag } = useTags();

  let tag = findTag(tagId);

  // const v = (newTagName) => {
  //   let index = findTagIndex(tagId);
  //   let updatedTag = JSON.parse(JSON.stringify(tags));
  //   updatedTag.splice(index, 1, { id: tagId, name: newTagName });
  //   console.log("updatedTag:", updatedTag);
  //   setTags(updatedTag);
  //   //tag.name = newTagName;
  //   console.log(tag.name);
  //   tag = findTag(parseInt(tagId));
  // };
  //updateTag(tagId);

  // const v = (newTagName) => {
  //   console.log("newTagName:", newTagName);
  //   console.log("tagId:", tagId);
  //   updateTag(tagId, newTagName);
  // };

  return (
    // <TagWrapper>
    //   <div>
    //     tag----{tag.id}--{tag.name}
    //   </div>
    // </TagWrapper>
    <Layout>
      <TopBar>
        <Icon name="#left"></Icon>
        <span>编辑标签</span>
        <Icon></Icon>
      </TopBar>
      <InputWrapper>
        {/* tag----{tag.id}--{tag.name} */}
        <Input
          label="标签"
          ph={tag.id}
          value1={tag.name}
          getValue={(i) => {
            // console.log("i:", i);
            // v(i);
            updateTag(tagId, i);
          }}
        ></Input>
      </InputWrapper>
      <Center>
        <Space></Space>
        <Space></Space>
        <Space></Space>
        <Button
          onClick={() => {
            console.log("111");
          }}
        >
          删除标签
        </Button>
      </Center>
    </Layout>
  );
};
export { Tag };
