
enum Status {
  PENDING,
  FULFILLED,
  REJECTED,
}

class MyPromise {
  #status: Status;
  #value: number;
  #reason: string;
  #fulfilledCb = [];
  #rejectedCb = [];
  constructor(executor) {
    this.#status = Status.PENDING;

    try{
      executor(this.#resolve, this.#reject);
    } catch(err) {
      this.#reject(err)
    }
  }

  #resolve = (value: number) => {
    if (this.#status !== Status.PENDING) return;
    this.#status = Status.FULFILLED;
    this.#value = value;
    while (this.#fulfilledCb.length) {
      this.#fulfilledCb.shift()(value);
    }
  }

  #reject = (reason: string) => {
    if (this.#status !== Status.PENDING) return;
    this.#status = Status.REJECTED;
    this.#reason = reason;
    while (this.#rejectedCb.length) {
      this.#rejectedCb.shift()(reason);
    }
  }

  then(onFulfilled, onRejected = null): MyPromise {

    const next: MyPromise = new MyPromise((resolve, reject) => {
      if (this.#status === Status.FULFILLED) {
        queueMicrotask(() => {
          try{
            const data = onFulfilled(this.#value);
            MyPromise.resolvePromise(next, data, resolve, reject);
          } catch(err){
            reject(err);
          }
        })
      } else if (this.#status === Status.REJECTED) {
        onRejected(this.#reason);
      } else {
        this.#fulfilledCb.push(() => {
          queueMicrotask(() => {
            const data = onFulfilled(this.#value);
            MyPromise.resolvePromise(next, data, resolve, reject);
          })
        });
        this.#rejectedCb.push(onRejected);
      }
    });

    return next;
  }

  static resolvePromise(next: MyPromise, data, resolve, reject) {
    if (next === data) {
      return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    if (data instanceof MyPromise)
      return data.then(resolve, reject);
    return resolve(data);
  }

}

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('initialize')
  })
  // throw new Error('Error here!');
})
.then((value) => {
  console.log(`resolve from ${value}`)
  return new MyPromise((resolve) => {
    resolve('Promise');
  })
})
.then((value) => {
  console.log(`resolve from ${value}`);
  return 'primitive';
})
.then((value) => {
  console.log(`resolve from ${value}`)
}, (err) => {
  console.error(err.message)
})


