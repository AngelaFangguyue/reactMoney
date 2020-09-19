import React, { useState } from "react";
// import Nav from "components/Nav";
import styled from "styled-components";
import Layout from "components/Layout";
import TypesSection from "views/moneyfloder/TypesSection";
import useRecords from "hooks/useRecords";
import useTags from "useTags";

const Item = styled.div`
  padding: 16px 8px;
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:nth-child(2) {
    margin-right: auto;
    margin-left: 16px;
  }
`;

function Statistics() {
  //console.log("statistics");
  const [q, setQ] = useState("-");
  //console.log("q:", q, "setQ:", setQ);
  // console.log("q:");
  const x = (i) => {
    console.log("i:", i);
    setQ(i.types);
  };

  const { records } = useRecords();
  const { findTagName } = useTags();

  const selectedRecords = records.filter((i) => i.types === q);

  let hashd = selectedRecords.reduce((hash, item) => {
    //console.log("hash:", hash);
    let string = item.created.slice(0, 10);
    if (!hash[string]) {
      hash[string] = [];
    }
    hash[string].push(item);

    return hash;
  }, {});

  //console.log("Object.entries(hashd):", Object.entries(hashd));
  hashd = Object.entries(hashd);
  // const obj = { foo: [1, 2, 3], baz: 42 };
  // console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
  console.log("hashd:", hashd);

  hashd.sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return 1;
    if (a[0] > b[0]) return -1;
  });
  console.log("hashd:", hashd);

  return (
    <Layout>
      <h2>Statistics</h2>
      <TypesSection
        value={q}
        onChange={(obj) => {
          //setSelected({ ...selected, types: types });
          x(obj);
        }}
      ></TypesSection>
      <div>
        {hashd.map((i) => {
          return (
            <div>
              <h3>{i[0]}</h3>
              <div>
                {i[1].map((r) => {
                  return (
                    <Item key={r.created}>
                      <div>
                        {r.tagIds.map((id) => {
                          return <span key={id}>{findTagName(id)}</span>;
                        })}
                      </div>

                      <div>{r.note}</div>
                      <div>{r.output}</div>
                      <div>{r.created}</div>
                    </Item>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
export default Statistics;
