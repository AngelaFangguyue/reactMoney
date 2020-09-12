// eslint-disable-next-line
const { resolvePreset } = require("@babel/core");

function Promise(executor) {
  let self = this;
  self.state = "pending";
  self.result = null;
  self.error = null;
  self.callbackResult = [];
  self.callbackError = [];

  function resolve(value) {
    // console.log(self.state, self.callbackResult, value, self.result);
    if (self.state === "pending") {
      self.state = "fulfilled";
      self.result = value;
      self.callbackResult.forEach((fn) => {
        fn();
      });
    }
  }

  function reject(value) {
    if (self.state === "pending") {
      self.state = "rejected";
      self.error = value;
      self.callbackError.forEach((fn) => {
        console.log("error");
        fn();
      });
    }
  }

  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// Promise.prototype.then = function (onFulfilled, onRejected) {
//   let self = this;
//   console.log("1:then>>", self.state, self.callbackResult);
//   if (self.state === "fulfilled") {
//     onFulfilled(self.result);
//   }
//   if (self.state === "rejected") {
//     onRejected(self.result);
//   }

//   //若为异步的操作
//   if (self.state === "pending") {
//     self.callbackResult.push(function () {
//       onFulfilled(self.result);
//     });
//     self.callbackError.push(function () {
//       onRejected(self.error);
//     });
//   }
//   console.log(
//     "2:then>>",
//     self.state,
//     self.callbackResult,
//     self.result,
//     self.error
//   );
// };

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError("不能循环"));
  }

  if (x && (typeof x === "function" || typeof x === "object")) {
    let called = false;
    try {
      let then = x.then;

      if (typeof x === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          (error) => {
            if (called) return;
            called = true;
            reject(error);
          }
        );
      } else {
        resolve(x);
      }
    } catch (error) {
      if (called) return;
      called = true;
      reject(error);
    }
  } else {
    console.log("resolve>", x);
    resolve(x);
  }

  // if (x === promise2) {
  //   return reject(new TypeError("不能重复"));
  // }

  // let called = false;

  // if (x && (typeof x === "function" || typeof x === "object")) {
  //   try {
  //     if (typeof then === "function") {
  //     } else {
  //       resolve(x);
  //     }
  //   } catch (error) {
  //     if (called) return;
  //     called = true;
  //     reject(error);
  //   }
  // } else {
  //   resolve(x);
  // }

  //   let called = false;

  //   if (x && (typeof x === "function" || typeof x === "object")) {
  //     try {
  //       let then = x.then;

  //       if (typeof then === "function") {
  //         then.call(x,y=>{
  //           if(called) return
  //           called = true
  //           resolve(y)
  //         },error=>{
  //           if(called) return
  //           called = true
  //           reject(error)
  //         })
  //       } else {
  //         resolve(x);
  //       }
  //     }
  //  else{

  //  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  let self = this;
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : (value) => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : (error) => {
          throw error;
        };

  let promise2 = new Promise((resolve, reject) => {
    console.log(
      "promise2>self.state:",
      self.state,
      "resolve:",
      resolve,
      "reject:",
      reject
    );

    if (self.state === "fulfilled") {
      setTimeout(() => {
        console.log(
          "fulfilled>promise2>onFulfilled:",
          onFulfilled,
          "fulfilled>promise2>onRejected:",
          onRejected
        );
        try {
          let x = onFulfilled(self.result);
          console.log("fulfilled>x:", x, "promise2:", promise2);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
    if (self.state === "rejected") {
      setTimeout(() => {
        console.log(
          "rejected>promise2>onFulfilled:",
          onFulfilled,
          "rejected>promise2>onRejected:",
          onRejected
        );
        try {
          let x = onRejected(self.result);
          console.log("rejected>x:", x, "promise2:", promise2);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }
    if (self.state === "pending") {
      self.callbackResult.push(function () {
        console.log(
          "pending>promise2>onFulfilled:",
          onFulfilled,
          "pending>promise2>onRejected:",
          onRejected
        );
        setTimeout(() => {
          try {
            console.log("pending>onFulfilled:", onFulfilled);
            let x = onFulfilled(self.result);
            console.log("pending>x:", x, "promise2:", promise2);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
      self.callbackError.push(function () {
        setTimeout(() => {
          try {
            let x = onRejected(self.result);
            console.log("pending>x:", x, "promise2:", promise2);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
    }
  });

  return promise2;

  // if (self.state === "fulfilled") {
  //   onFulfilled(self.result);
  // }
  // if (self.state === "rejected") {
  //   onRejected(self.result);
  // }

  // //若为异步的操作
  // if (self.state === "pending") {
  //   self.callbackResult.push(function () {
  //     onFulfilled(self.result);
  //   });
  //   self.callbackError.push(function () {
  //     onRejected(self.error);
  //   });
  // }
};

module.exports = Promise;

// function swap1(arr, x, j) {
//   [arr[x], arr[j]] = [arr[j], arr[x]];
// }

// function swap(arr, i, j) {
//   let temp = arr[j];
//   arr[j] = arr[i];
//   arr[i] = temp;
// }

// function errorSwap(arr1, arr2) {
//   let temp = arr1;
//   arr1 = arr2;
//   arr2 = temp;
// }

//// let arr = [3, 5, 2, 4, 9, 7, 6, 8];

//冒泡，小的浮上去
// function maopao(arr) {
//   // let len = arr.length - 1;
//   // for (let i = len; i > 0; i--) {
//   //   console.log("i:", i);
//   //   for (let j = len; j > len - i; j--) {
//   //     console.log("j>", j, arr[j], arr[j - 1]);
//   //     if (arr[j] < arr[j - 1]) {
//   //       // console.log("1>", j, arr[j], arr[j + 1]);
//   //       swap(arr, j, j - 1);
//   //     }
//   //   }
//   // }
//   //////////////////////////////
//   let len = arr.length - 1;
//   for (let i = 0; i < len; i++) {
//     console.log(i);
//     // j为比较次数 第i轮仅需比较length-1-i次
//     for (let j = 0; j < len - i; j++) {
//       //console.log("1>", j, arr[j], arr[j + 1]);
//       // 通过判断相邻两项的大小 决定是否交换位置
//       if (arr[j] < arr[j + 1]) {
//         //swap1(arr, j, j + 1);
//         // let tmp = arr[j];
//         // arr[j] = arr[j + 1];
//         // arr[j + 1] = tmp;
//         errorSwap(arr[j], arr[j + 1]);
//       }
//     }
//   }
// }
//console.log(arr);

//maopao(arr);
// console.log("arr:", arr);

// function xuan(arr) {
//   let len = arr.length;

//   for (let i = 0; i < len - 1; i++) {
//     let index = i;
//     let min = arr[i];

//     for (let j = i + 1; j < len; j++) {
//       //console.log("i,j", i, arr[i], j, arr[j]);
//       console.log(j, arr[j], min);
//       if (min > arr[j]) {
//         min = arr[j];
//         index = j;
//       }
//     }
//     swap(arr, i, index);

//     // arr[index] = arr[i];
//     // arr[i] = min;
//     // console.log(i, min, arr);
//   }
// }

// function xuan2(a) {
//   let len = a.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (a[i] > a[j]) {
//         [a[i], a[j]] = [a[j], a[i]]; //这样也可以，不过就是每次发现小的就要交换位置
//         console.log("111");
//       }
//       console.log(a);
//     }
//   }
// }

// //xuan(arr);

// function insert(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let temp = arr[i];
//     let j = i;
//     for (; j > 0; j--) {
//       if (temp > arr[j - 1]) {
//         break;
//       }
//       arr[j] = arr[j - 1];
//     }
//     console.log("temp:", i, j, temp);
//     arr[j] = temp;
//   }
//   return arr;
// }
// let a = [2, 1, 5, 4];
// insert(a);

// console.log("arr:", a);

// //不用class如何实现继承
// function Animal(color) {
//   this.color = color;
// }

// Animal.prototype.move = function () {
//   console.log("move");
// };

// function Dog(color, name) {
//   Animal.call(this, color);
//   this.name = name;
// }

// Dog.prototype.__proto__ = Animal.prototype;

// Dog.prototype.constructor = Dog;

// Dog.prototype.say = function () {
//   console.log("wang");
// };

//var dog = new Dog("white", "bobo");

function select(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) < 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
let arr1 = [1, 3, 4, 3, 2, 5, 2, 5, 7];
console.log(select(arr1));

// function inherits(Child, Parent) {
//   let F = function () {};
//   F.prototype = Parent.prototype;
//   Child.prototype = new F();
//   Child.prototype.constructor = Child;
// }

function Student(name) {
  this.name = name;
}
Student.prototype.getNumber = function () {
  console.log(this.name);
};

function PrimaryStudent(name, grade) {
  Student.call(this, name);
  this.grade = grade;
}
PrimaryStudent.prototype.getGrade = function () {
  console.log(this.grade);
};

//inherits(SuperStudent, Student);

let F = function () {};
F.prototype = Student.prototype;
PrimaryStudent.prototype = new F();
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 创建xiaoming:
var xiaoming = new PrimaryStudent("小明", 2);
console.log(
  xiaoming.name, // '小明'
  xiaoming.grade, // 2

  "验证原型:",
  xiaoming.__proto__ === PrimaryStudent.prototype, // true
  xiaoming.__proto__.__proto__ === Student.prototype, // true
  xiaoming.__proto__.__proto__ === F.prototype,

  " 验证继承关系:",
  xiaoming instanceof PrimaryStudent, // true
  xiaoming instanceof Student, // true
  xiaoming instanceof F
);

class Animal {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log("hihi");
  }
}

class Cat extends Animal {
  // eslint-disable-next-line
  constructor(name) {
    super(name);
  }
  say() {
    //this.hello();
    console.log("Hello,", this.name, "!", this.hello());
  }
}

// 测试:
var kitty = new Cat("Kitty");
var doraemon = new Cat("哆啦A梦");
if (
  new Cat("x") instanceof Animal &&
  kitty &&
  kitty.name === "Kitty" &&
  kitty.say &&
  typeof kitty.say === "function" &&
  kitty.say() === "Hello, Kitty!" &&
  kitty.say === doraemon.say
) {
  console.log("测试通过!");
} else {
  console.log("测试失败!");
}

// promise2.prototype.then = function (onfulfilled, onrejected) {
//   let self = this;

//   let promise3 = new Promise2((resolve, reject) => {
//     if (self.state === "fulfilled") {
//       setTimeout(() => {
//         try {
//           let x = onfulfilled(self.result);
//           resolvep(promise3, x, resolve, reject);
//         } catch (error) {
//           reject(error);
//         }
//       });
//     }
//     if (self.state === "onrejected") {
//     }
//     if (self.state === "pending") {
//       callbackS.push(() => {
//         setTimeout(() => {
//           try {
//             let x = onfulfilled(self.result);
//             resolvep(promise3, x, resolve, reject_);
//           } catch (error) {
//             reject(error);
//           }
//         });
//       });

//       callbackF.push(() => {
//         onrejected(self.error);
//       });
//       //let x =  onfulfilled(self.result)
//       //resolvep(promise2,x,resolve,reject)
//     }
//   });

//   return promise3;
// };

// resolvep(p4,x,resolve,reject){
//   if(p4===x){return new TypeError("error")}

//   if(x && (typeof x ==="function" || typeof x ==="object" )){
//     let called

//     try{

//       if(typeof x ==="function"){
//         let then = x.then

//         then.call(x,r=>{
//           if(called)return
//           called = true
//           resolvep(promise2,r,resolve,reject)
//         },e=>{
//           if(called)return
//           called = true
//           reject(e)
//         })

//       }else{
//         resolve(x)
//       }

//     }catch(error){
//       if(called)return
//       called = true
//       reject(error)
//     }

//   }else{
//     resolve(x);
//   }

// }

function isObj(x) {
  console.log("x:", x);
  console.log(Object.prototype.toString.call(x) === "[object Object]");
  return Object.prototype.toString.call(x) === "[object Object]";
}

// function isObj(obj) {
//   return (typeof obj === "object" || typeof obj === "function") && obj !== null;
// }

function deepClone(obj) {
  let newobj = Array.isArray(obj) ? [] : {};
  //let newobj;
  for (let val in obj) {
    console.log("val:", val);
    newobj[val] = isObj(obj[val]) ? deepClone(obj[val]) : obj[val]; //这句话是深拷贝
    //newobj[val] = obj[val];//这句话是浅拷贝
  }
  return newobj;
}

let obj2 = {
  name: "a",
  age: 16,
  hobby: "music",
  friends: ["q", "w"],
  friends2: [{ name: "a1" }],
};

let objclone = deepClone(obj2);
//console.log("objclone:", objclone);
console.log(
  "objclone>1:",
  objclone.friends2 === obj2.friends2,
  objclone.friends2[0] === obj2.friends2[0],
  objclone.name === obj2.name
);
console.log("obj2:", obj2.friends2[0], objclone.friends2[0]);

//////////////
//objclone.friends = ["e", "r"];
//console.log("objclone>2:", objclone);
let objj = [1, 2, 3, 4, { name: "a" }, 7, [1, 3, { name: "a" }]];
let objj2 = deepClone(objj);
console.log(objj2[6][2] === objj[6][2]);
