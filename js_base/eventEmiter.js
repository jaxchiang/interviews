class EventHub {
  constructor() {
    this.callbacks = {};
  }

  on(event, callback) {
    if (!this.callbacks[event]) {
      this.callbacks[event] = [callback];
    } else {
      this.callbacks[event].push(callback);
    }
  }

  off(event, callback) {
    if (!this.callbacks[event]) {
      return;
    }

    this.callbacks[event] = this.callbacks[event].filter((c) => c !== callback);
  }

  once(event, callback) {
    const fn = () => {
      callback();
      this.off(event, fn);
    };

    this.on(event, callback);
  }

  emit(event, ...rest) {
    if (this.callbacks[event]) {
      this.callbacks[event].forEach((callback) => callback.call(this, ...rest));
    }
  }
}

const event = new EventHub();

const handle = (...rest) => {
  console.log(rest);
};

event.on("click", handle);

event.emit("click", 1, 2, 3, 4);

event.off("click", handle);

event.emit("click", 1, 2);

event.once("dbClick", () => {
  console.log(123456);
});
event.emit("dbClick");
event.emit("dbClick");
