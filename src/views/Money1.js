//import React from "react";
import React, { useState } from "react";
// import Nav from "components/Nav";
//import styled from "styled-components";
import Layout from "components/Layout";
import TagsSection from "./moneyfloder/TagsSection";
import NumbersSection from "./moneyfloder/NumbersSection";
import NotesSection from "./moneyfloder/NotesSection";
import TypesSection from "./moneyfloder/TypesSection.js";
import useRecords from "hooks/useRecords";

const defaultSelected = {
  tagIds: [1],
  note: "",
  types: "-",
  output: 0,
  //created: "",
};

function Money1() {
  const [selected, setSelected] = useState({ ...defaultSelected });

  function x(obj) {
    setSelected({ ...selected, ...obj });
    //console.log("obj:", obj);
  }

  //const { selected, setSelected, addSelected } = useRecords();
  const { addRecords } = useRecords();

  const submit = () => {
    //console.log("submit", new Date().toISOString());
    // setSelected({ ...selected, created: new Date().toISOString() });
    // alert("添加");
    if (addRecords(selected)) {
      alert("添加成功");
      setSelected({ ...defaultSelected });
    }
  };
  // console.log("records:", records);
  // console.log("selected:", selected);

  // useEffect(()=>{
  //   setTimeout(()=>{
  //     console.log("时间到")
  //     setSelected({...selected,output:1234})
  //   },3000)
  // },[])  //改变了output，但是numberpad上面显示的也不会变，因为numberpad显示的是它使用useState生成的

  return (
    <Layout>
      <TagsSection
        value={selected.tagIds}
        onChange={(obj) => {
          //setSelected({ ...selected, tags: tags });
          x(obj);
        }}
      ></TagsSection>
      <NotesSection
        value={selected.note}
        onChange={(obj) => {
          //setSelected({ ...selected, note: note });
          x(obj);
        }}
      ></NotesSection>
      <TypesSection
        value={selected.types}
        onChange={(obj) => {
          //setSelected({ ...selected, types: types });
          x(obj);
        }}
      ></TypesSection>
      <NumbersSection
        value={selected.output}
        onChange={(obj) => {
          //setSelected({ ...selected, output: output });
          x(obj);
        }}
        onOk={submit}
      ></NumbersSection>
    </Layout>
  );
}
export default Money1;
