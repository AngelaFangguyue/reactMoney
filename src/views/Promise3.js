function Promise3(excutor) {
  let self = this;
  self.status = "pending";
  self.successresult = "";
  self.failresult = "";
  self.successCallback = [];
  self.failCallback = [];

  function resolve(proSuccessResult) {
    this.status = "fulfilled";
    this.successresult = proSuccessResult;
    this.successCallback.forEach((proSuccessFunction) => {
      proSuccessFunction();
    });
  }

  function reject(proFailResult) {
    this.status = "rejected";
    this.failresult = proFailResult;
    this.failCallback.forEach((proFailFunction) => {
      proFailFunction();
    });
  }

  excutor(resolve, reject);
}

Promise3.prototype.then = function (proSuccessCallback, proFailCallback) {
  let self = this;

  let Promise4 = new Promise3((resolve, reject) => {
    if (self.status === "fulfilled") {
      setTimeout(() => {
        try {
          let x = proSuccessCallback(self.successresult);
          resolvePromise(Promise4, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }

    if (self.status === "rejected") {
      setTimeout(() => {
        try {
          let x = proFailCallback(self.successresult);
          resolvePromise(Promise4, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }

    if (self.status === "pending") {
      self.successCallback.push(() => {
        setTimeout(() => {
          let x = proSuccessCallback(self.successresult);
          resolvePromise(Promise4, x, resolve, reject);
        });
      });
      self.failCallback.push(() => {
        setTimeout(() => {
          let x = proFailCallback(self.failresult);
          resolvePromise(Promise4, x, resolve, reject);
        });
      });
    }
  });

  return Promise4;

  // if(self.status==="fulfilled"){
  //     setTimeout(()=>{
  //         proSuccessCallback(self.successresult)
  //     })

  // }
  // if(self.status==="rejected"){
  //     setTimeout(()=>{
  //         proFailCallback(self.failresult)
  //     })
  // }
  // if(self.status==="pending"){
  //     self.successCallback.push(()=>{
  //         proSuccessCallback(self.successresult)
  //     });
  //     self.failCallback.push(()=>{
  //         proFailCallback(self.failresult)
  //     });

  // }
};

function resolvePromise(p4, x, resolve, reject) {
  if (p4 === x) {
    return reject(new TypeError("同"));
  }

  if (x && (typeof x === "function" || typeof x === "object")) {
    let called = false;
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(p4, y, resolve, reject);
          },
          (err) => {
            if (called) return;
            called = true;
            reject(err);
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
    resolve(x);
  }
}

new Promise((resolve) => {
  //console.log(0);
  setTimeout(() => {
    console.log("promise3333111");
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
    console.log("promise3333:", res);
  });

module.exports = Promise3;
