import { useState, useEffect } from "react";
import useUpdate from "hooks/useUpdate";
console.log("进入useRecords文件里的useRecords函数了");
const useRecords = () => {
  //console.log("进入useRecords文件里的useRecords函数了");

  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem("records") || "[]"));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecords = (newRecord) => {
    if (newRecord.output === "") {
      alert("请输入金额");
      return false;
    }
    if (newRecord.tagIds.length === 0) {
      alert("请选择标签");
      return false;
    }

    const newRecordAdd = { ...newRecord, created: new Date().toISOString() };
    console.log("111111111111111111111111111newRecordAdd:", newRecordAdd);

    setRecords([...records, newRecordAdd]);
    return true;
  };

  return { records, setRecords, addRecords };
};

export default useRecords;
