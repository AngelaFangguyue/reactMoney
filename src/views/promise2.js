const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function resolvePromise(promise2, x, resolve, reject) {
  console.log("resolvePromise>promise2:", promise2);

  // 循环引用报错
  if (x === promise2) {
    // reject报错
    return reject(new TypeError("Chaining cycle detected for promise"));
  }
  // 防止多次调用
  let called;
  // x不是null 且x是对象或者函数
  if (x != null && (typeof x === "object" || typeof x === "function")) {
    console.log("resolvePromise>x1:", x);
    try {
      // A+规定，声明then = x的then方法
      let then = x.then;
      console.log("resolvePromise>then:", then);
      // 如果then是函数，就默认是promise了
      if (typeof then === "function") {
        // 就让then执行 第一个参数是this   后面是成功的回调 和 失败的回调
        then.call(
          x,
          (y) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            // resolve的结果依旧是promise 那就继续解析
            resolvePromise(promise2, y, resolve, reject);
          },
          (err) => {
            // 成功和失败只能调用一个
            if (called) return;
            called = true;
            reject(err); // 失败了就失败了
          }
        );
      } else {
        resolve(x); // 直接成功即可
      }
    } catch (e) {
      // 也属于失败
      if (called) return;
      called = true;
      // 取then出错了那就不要在继续执行了
      reject(e);
    }
  } else {
    console.log("resolvePromise>x2:", x);
    resolve(x);
  }
}

class Promise {
  constructor(executor) {
    this.state = PENDING;
    this.value = "";
    this.reason = "";

    // 成功存放的数组
    this.onResolvedCallbacks = [];
    // 失败存放法数组
    this.onRejectedCallbacks = [];

    let resolve = (value) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.value = value;
        // pending->fulfilled 按照成功清单执行
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    let reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.reason = reason;
        // pending->rejected 按照异常清单执行
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  then(onFulfilled, onRejected) {
    console.log("then>this.state:", this.state);
    // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    // onRejected如果不是函数，就忽略onRejected，扔出错误
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === FULFILLED) {
        // 异步解决：
        // onRejected返回一个普通的值，失败时如果直接等于 value => value，
        // 则会跑到下一个then中的onFulfilled中，
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            console.log("onFulfilled>", x);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            console.log("onRejected>", x);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }
      if (this.state === PENDING) {
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              console.log("PENDING1>", x, "onFulfilled:", onFulfilled);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              console.log("PENDING2>", x, "onRejected", onRejected);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });
    return promise2;
  }
}
new Promise((resolve) => {
  //console.log(0);
  setTimeout(() => {
    console.log("111");
    resolve(1);
  }, 8000);
})
  .then((res) => {
    console.log(res);
    return new Promise((resolve) => {
      console.log(2);
      setTimeout(() => {
        resolve(3);
      }, 8000);
    });
  })
  .then((res) => {
    console.log(res);
  });

// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("then的级联");
//     resolve(300);
//   }, 8000);
// });
// promise3.then((result) => {
//   console.log("promise3的then方法：", result);
// });
