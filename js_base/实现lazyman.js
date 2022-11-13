/**
 * async 方式实现lazyMan
 */
class LazyManAsync {
  queue = [];
  constructor(name) {
    this.name = name;
    this.sayName(name);

    // 异步操作,放到下一个队列里
    Promise.resolve().then(() => {
      let sequence = Promise.resolve();
      this.queue.forEach((item) => {
        sequence = sequence.then(item);
      });
    });
  }

  sayName(name) {
    this.queue.push(() => {
      console.log(`Hi! this is ${name}!`);
    });
    return this;
  }

  eat(meal) {
    this.queue.push(() => {
      console.log(`eat ${meal}`);
    });
    return this;
  }

  _holdOn(time) {
    return () =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log(`Wake up after ${time} second`);
          resolve();
        }, time * 1000);
      });
  }

  sleep(time) {
    this.queue.push(this._holdOn(time));
    return this;
  }

  sleepFirst(time) {
    this.queue.unshift(this._holdOn(time));
    return this;
  }
}
