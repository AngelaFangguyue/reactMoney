import React from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
import Layout from "components/Layout";
import useTags from "useTags.js";
import Icon from "../components/Icon.js";
import Button from "../components/Button.js";
import Center from "../components/Center.js";
import Space from "../components/Space.js";
import { Link } from "react-router-dom";

const UlWrapper = styled.ul`
  margin: 0 16px;
  li {
    a {
      padding: 12px 0;
      border-bottom: 1px solid #d5d5d5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

// const Button = styled.button`
//   border: none;
//   border-radius: 4px;
//   background-color: #f5d5d5;
//   padding: 14px 10px;
//   color: white;
//   /* align-self: flex-start; */ /*加这句话的意思本来是button外面没有Center，而是Layout里的SwitchWrapper是它的父容器，此时button的宽度占满了整个屏幕的宽度。*/
// `;

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;

// const Space = styled.div`
//   margin-top: 16px;
// `;

function Tags() {
  console.log("Tags1:");
  const { tags, addTag } = useTags();
  console.log("setTags:", tags);

  return (
    <Layout>
      {/* <div>{tags.join("")}</div> */}
      <UlWrapper>
        {/* <ul> */}
        {tags.map((i) => {
          return (
            <li key={i.id}>
              <Link to={"/tags/" + i.id}>
                <span className="oneLine">
                  {i.id}:{i.name}
                </span>
                <Icon name="#right" className="rightIcon"></Icon>
              </Link>
            </li>
          );
        })}
        {/* </ul> */}
      </UlWrapper>
      <Center>
        <Space></Space>
        <Space></Space>
        <Button onClick={addTag}>新加标签</Button>
      </Center>
    </Layout>
  );
}
export default Tags;
