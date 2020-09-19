import { useEffect, useState } from "react";
import { createId } from "./lib/createId";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];
console.log("进入useTags文件");

const useTags = () => {
  console.log("进入useTags文件里的useTags函数了");

  const [tags, setTags] = useState(defaultTags);
  //const [tags, setTags] = useState([]);

  console.log("进入useTags文件里的useTags函数了，此时tags：", tags);

  const findTag = (id) => {
    return tags.filter((i) => i.id === id)[0];
  };

  const findTagIndex = (tagId) => {
    let index = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === parseInt(tagId)) {
        index = i;
        break;
      }
    }
    return index;
  };

  const updateTag = (tagId, newTagName) => {
    // let index = findTagIndex(tagId);
    // let updatedTag = JSON.parse(JSON.stringify(tags));
    // updatedTag.splice(index, 1, { id: tagId, name: newTagName });
    // console.log("updateTag:", updatedTag);
    // setTags(updatedTag);
    setTags(
      tags.map((i) => {
        // if(tagId===i.id){
        //   return { id: tagId, name: newTagName }
        // }else{
        //   return i
        // }
        return tagId === i.id ? { id: tagId, name: newTagName } : i;
      })
    );
    console.log("update>tags:", tags);
  };

  const deleteTag = (tagId) => {
    // let index = findTagIndex(tagId);
    // let updatedTag = JSON.parse(JSON.stringify(tags));
    // updatedTag.splice(index, 1);
    // console.log("updateTag:", updatedTag);
    // setTags(updatedTag);
    setTags(tags.filter((i) => i.id !== tagId));
    console.log("delete>tags:", tags);
  };

  const addTag = () => {
    let newTag = window.prompt("请输入新的标签名");

    if (newTag) {
      setTags([...tags, { id: createId(), name: newTag }]);
    }
    //console.log("tags:", tags);
  };

  // useEffect(() => {
  //   console.log("useEffect空：", tags);
  //   //console.log("useEffect空");
  // }, []);
  useEffect(() => {
    console.log("useEffect空：", tags);
    //console.log("useEffect空");
  }, [tags]);
  // useEffect(() => {
  //   console.log("useEffect空localTags11:", tags);
  //   let localTags = JSON.parse(window.localStorage.getItem("tags"));
  //   console.log("useEffect空localTags22:", tags);
  //   console.log("useEffect空localTags33:", localTags);
  //   if (localTags && localTags.length > 0) {
  //     setTags(localTags);
  //   } else {
  //     setTags(defaultTags);
  //   }
  //   console.log("useEffect空localTags44:", tags);
  // }, []);

  // useEffect(() => {
  //   console.log("useEffect监听tags11:", tags);
  //   window.localStorage.setItem("tags", JSON.stringify(tags));
  //   console.log("useEffect监听tags22:", tags);
  // }, [tags]);

  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag, addTag };
};

export default useTags;
