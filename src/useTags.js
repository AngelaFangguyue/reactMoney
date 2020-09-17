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

  const findTag = (id) => {
    return tags.filter((i) => i.id === id)[0];
  };
  // return [tags, setTags, findTag];
  return { tags, setTags, findTag };
};

export default useTags;
