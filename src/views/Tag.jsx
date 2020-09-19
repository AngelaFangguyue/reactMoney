import Layout from "components/Layout.js";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
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
const TopTitle = styled.div`
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
  // console.log("tag>tagId:", tagId);

  // const { tags, setTags, findTag, findTagIndex, updateTag } = useTags();
  const { tags, findTag, updateTag, deleteTag } = useTags();
  console.log("tag>tags:", tags);

  let tag = findTag(tagId);

  let content = (tagParam) => (
    <div>
      <InputWrapper>
        <Input
          label="标签"
          ph={tagParam.id}
          value1={tagParam.name}
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
            //console.log("111");
            deleteTag(tagId);
          }}
        >
          删除标签
        </Button>
      </Center>
    </div>
  );

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
  const history = useHistory();
  const goBack = () => {
    history.goBack();
    console.log("goBack");
  };

  return (
    // <TagWrapper>
    //   <div>
    //     tag----{tag.id}--{tag.name}
    //   </div>
    // </TagWrapper>
    <Layout>
      <TopTitle>
        <Icon name="#left" onClick={goBack}></Icon>
        <span>编辑标签</span>
        <Icon></Icon>
      </TopTitle>

      {tag ? (
        content(tag)
      ) : (
        <Center>
          <Space></Space>
          <Space></Space>
          <Space></Space>
          该Tag已被删除或不存在
        </Center>
      )}
      {/* {tag ? (
        <div>
          <InputWrapper>
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
                deleteTag(tagId);
              }}
            >
              删除标签
            </Button>
          </Center>
        </div>
      ) : (
        <Center>
          <Space></Space>
          <Space></Space>
          <Space></Space>
          该Tag已被删除或不存在
        </Center>
      )} */}

      {/*tag----{tag.id}--{tag.name}*/}
      {/* <InputWrapper>
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
            deleteTag(tagId);
          }}
        >
          删除标签
        </Button>
      </Center> */}
    </Layout>
  );
};
export { Tag };
