/**
 * @description 手写Promise
 */
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class Promise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.value = value;
        this.status = FULFILLED;
        this.onResolvedCallbacks.forEach((cb) => cb());
      }
    };
    let reject = (reason) => {
      if (this.status === PENDING) {
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallbacks.forEach((cb) => cb());
      }
    };
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    /** 条件判断 */
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (err) => {
            throw err;
          };

    let nextPromise = new Promise((resolve, reject) => {
      /** part1 resolve  */
      let resolveTask = () => {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value);
            resolvePromise(nextPromise, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      /** part2 reject */
      let rejectTask = () => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(nextPromise, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      if (this.status === FULFILLED) {
        resolveTask();
      }
      if (this.status === REJECTED) {
        rejectTask();
      }
      if (this.status === PENDING) {
        this.onResolvedCallbacks.push(resolveTask);
        this.onRejectedCallbacks.push(rejectTask);
      }
    });
    return nextPromise;
  }

  catch(callback) {
    return this.then(undefined, callback);
  }

  finally(callback) {
    return this.then(
      (value) => Promise.resolve(callback()).then(() => value),
      (err) =>
        Promise.resolve(callback()).then(() => {
          throw err;
        })
    );
  }

  static resolve(p) {
    if (p instanceof Promise) return p;
    if (p !== null && (typeof p === "object" || typeof p === "function")) {
      let then = p.then;
      if (typeof then === "function") {
        return new Promise((resolve, reject) => {
          then.call(p, (value) => {
            resolve(value);
          });
        });
      }
    }
    return new Promise((resolve, reject) => {
      resolve(p);
    });
  }

  static reject(p) {
    return new Promise((resolve, reject) => {
      reject(p);
    });
  }

  static all(promises) {
    return new Promise((resolve, reject) => {
      let len = promises.length,
        count = 0;
      let result = new Array(len);
      promises.forEach((p, i) => {
        Promise(p).then((res) => {
          result[i] = res;
          count++;
          if (count === len) {
            resolve(result);
          }
        }, reject);
      });
    });
  }

  static race(promises) {
    return new Promise((resolve, reject) => {
      promises.forEach((p) => {
        Promise(p).then(resolve, reject);
      });
    });
  }

  static any(promises) {
    return new Promise((resolve, reject) => {
      let len = promises.length,
        count = 0;
      let result = new Array(len);
      promises.forEach((p, i) => {
        Promise.resolve(p).then(resolve, (err) => {
          result[i] = err;
          count++;
          if (count === len) {
            reject("AggregateError: All promises were rejected");
          }
        });
      });
    });
  }
}

/**
 * 判断then函数中返回值的类型, 不管是resolve还是reject,都需要
 * @param {*} promise nextPromise
 * @param {*} x
 * @param {*} resolve
 * @param {*} reject
 * @returns
 */
function resolvePromise(promise, x, resolve, reject) {
  /** 循环 */
  if (promise === x) {
    throw new TypeError("Chaining dected cycle in promise!");
  }

  let called;
  if (x !== null && (typeof x === "object" || typeof x === "function")) {
    try {
      let then = x.then;
      if (typeof then === "function") {
        then.call(
          x,
          (y) => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
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
