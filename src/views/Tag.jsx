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
  padding: 5px 16px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = () => {
  const { tagId } = useParams();
  // const [tags, setTags, findTag] = useTags();
  //   console.log(
  //     "useTags()",
  //     useTags(),
  //     "tags:",
  //     tags,
  //     "setTags:",
  //     setTags,
  //     "findTag:",
  //     findTag
  //   );
  const { findTag } = useTags();
  const tag = findTag(parseInt(tagId));
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
      <div>
        tag----{tag.id}--{tag.name}
        <Input label="标签" ph={tag.name}></Input>
      </div>
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
