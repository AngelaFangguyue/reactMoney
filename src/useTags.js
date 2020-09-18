import { useState } from "react";
import { createId } from "./lib/createId";

const defaultTags = [
  { id: createId(), name: "衣" },
  { id: createId(), name: "食" },
  { id: createId(), name: "住" },
  { id: createId(), name: "行" },
];

const useTags = () => {
  const [tags, setTags] = useState(defaultTags);
  //const []

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
    let index = findTagIndex(tagId);
    let updatedTag = JSON.parse(JSON.stringify(tags));
    updatedTag.splice(index, 1, { id: tagId, name: newTagName });
    console.log("updateTag:", updatedTag);
    setTags(updatedTag);
  };

  const deleteTag = (tagId) => {
    let index = findTagIndex(tagId);
    let updatedTag = JSON.parse(JSON.stringify(tags));
    updatedTag.splice(index, 1);
    console.log("updateTag:", updatedTag);
    setTags(updatedTag);
  };
  // return [tags, setTags, findTag];
  return { tags, setTags, findTag, findTagIndex, updateTag, deleteTag };
};

export default useTags;
