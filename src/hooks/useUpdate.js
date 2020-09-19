// eslint-disable-next-line
import { useEffect, useRef } from "react";
//let count = useRef(0);
// const useUpdate = (fn, deps) => {
//   //   let count = useRef(0);
//   //   useEffect(() => {
//   //     // console.log("1》count:", count);
//        count.current += 1;
//   //     // console.log("2》count:", count);
//   //   }, [tags]);
//   if (count.current > 1) {
//     useEffect(fn, [deps]);
//   }
// };

// const useUpdate = (fn, deps) => {
//   let count = useRef(0);
//   console.log("count.current:", count.current);
//   useEffect(() => {
//     count.current += 1;
//     if (count.current > 1) {
//       // window.localStorage.setItem("tags", JSON.stringify(tags));
//       fn();
//     }
//   }, [deps]);
// };
const useUpdate = (fn, deps) => {
  let count = useRef(0);
  //console.log("useUpdate》count:", count);
  useEffect(() => {
    //console.log("1》count:", count);
    count.current += 1;
    //console.log("2》count:", count);
  });
  // eslint-disable-next-line
  useEffect(() => {
    // console.log("1111count：", count);
    if (count.current > 1) {
      //console.log("useEffect>tags:", tags);
      //console.log("useEffect空");
      //window.localStorage.setItem("tags", JSON.stringify(tags));
      // eslint-disable-next-line
      fn();
    }
  }, [deps, fn]);
};

export default useUpdate;
