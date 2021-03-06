import useUpdate from "hooks/useUpdate";
//import useUpdate from "hooks/useUpdate";
import { useEffect, useState } from "react";
import { createId } from "./lib/createId";

// const defaultTags = [
//   { id: createId(), name: "衣" },
//   { id: createId(), name: "食" },
//   { id: createId(), name: "住" },
//   { id: createId(), name: "行" },
// ]; //
//console.log("defaultTags:", defaultTags);
//console.log("进入useTags文件");

const useTags = () => {
  //console.log("进入useTags文件里的useTags函数了");

  //const [tags, setTags] = useState(defaultTags);
  const [tags, setTags] = useState([]);
  //console.log("进入useTags文件里的useTags函数了，此时tags：", tags);

  useEffect(() => {
    //console.log("useEffect空：", tags);
    //console.log("useEffect空11", tags);
    //debugger;
    let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
    if (localTags.length < 1) {
      //const defaultTags = [
      localTags = [
        { id: createId(), name: "衣" },
        { id: createId(), name: "食" },
        { id: createId(), name: "住" },
        { id: createId(), name: "行" },
      ];
    }
    setTags(localTags);

    //console.log("useEffect空22", tags);
    //console.log("useEffect空33", localTags);
  }, []);

  // let count = useRef(0);
  // useEffect(() => {
  //   console.log("1》count:", count);
  //   count.current += 1;
  //   console.log("2》count:", count);
  // });

  // useEffect(() => {
  //   console.log("1111count：", count);
  //   if (count.current > 1) {
  //     console.log("useEffect>tags:", tags);
  //     //debugger;
  //     //console.log("useEffect空");
  //     window.localStorage.setItem("tags", JSON.stringify(tags));
  //   }
  // }, [tags]);
  useUpdate(() => {
    window.localStorage.setItem("tags", JSON.stringify(tags));
    //console.log("window.localStorage:", JSON.stringify(tags));
  }, tags);
  // useUpdate(() => {
  //   window.localStorage.setItem("tags", JSON.stringify(tags));
  //   console.log("111");
  // }, tags);
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

  const findTag = (id) => {
    return tags.filter((i) => i.id === id)[0];
  };

  const findTagName = (tagId) => {
    let tag = findTag(tagId);
    if (tag) {
      return tag.name;
    } else {
      return "无标签";
    }
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
    //console.log("update>tags:", tags);
  };

  const deleteTag = (tagId) => {
    // let index = findTagIndex(tagId);
    // let updatedTag = JSON.parse(JSON.stringify(tags));
    // updatedTag.splice(index, 1);
    // console.log("updateTag:", updatedTag);
    // setTags(updatedTag);
    setTags(tags.filter((i) => i.id !== tagId));
    //console.log("delete>tags:", tags);
  };

  const addTag = () => {
    let newTag = window.prompt("请输入新的标签名");

    if (newTag) {
      setTags([...tags, { id: createId(), name: newTag }]);
    }
    //console.log("tags:", tags);
  };

  return {
    tags,
    setTags,
    findTag,
    findTagIndex,
    findTagName,
    updateTag,
    deleteTag,
    addTag,
  };
};

export default useTags;
