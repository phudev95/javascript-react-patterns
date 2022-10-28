// CounterClass.js
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error(
        "You can only create one instance!"
      );
    }
    this.counter = 0;
    instance = this;
  }

  getCount() { return this.counter; }
  increment() { return ++this.counter; }
  decrement() { return --this.counter; }
}

const counter = new Counter();
export const getInstance = () => counter;
export default counter;