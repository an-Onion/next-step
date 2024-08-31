type Status = "Pending" | "Fulfilled" | "Rejected";

type ResolveFunc = (value?: unknown) => unknown;
type RejectFunc = (reason?: string) => string | undefined;

type Executor = (resolve: ResolveFunc, reject?: RejectFunc) => void;

class MyPromise {
  #status: Status;
  #value: unknown;
  #reason: string | undefined;
  #fulfilledQueue: Array<ResolveFunc> = [];
  #rejectedQueue: Array<RejectFunc | undefined> = [];
  constructor(executor: Executor) {
    this.#status = "Pending";

    const resolve: ResolveFunc = (value) => {
      if (this.#status !== "Pending") return;

      this.#value = value;
      this.#status = "Fulfilled";

      this.#fulfilledQueue.forEach((cb) => cb?.(value));
    };

    const reject: RejectFunc = (reason) => {
      if (this.#status !== "Pending") return;

      this.#reason = reason;
      this.#status = "Rejected";
      this.#rejectedQueue.forEach((cb) => cb?.(reason));
      return this.#reason;
    };

    try {
      executor(resolve, reject);
    } catch (err: unknown) {
      reject(err as string);
    }
  }

  then(onFulfilled: ResolveFunc, onRejected?: RejectFunc) {
    console.log("In Then", this.#status);

    const executor: Executor = (resolve, reject) => {
      const nextFulfilled = (value: unknown) => {
        queueMicrotask(() => {
          const success = onFulfilled(value);

          if (success instanceof MyPromise) {
            return success.then(resolve, reject);
          }

          return resolve(success);
        });
      };

      if (this.#status === "Fulfilled") {
        nextFulfilled(this.#value);
      }

      const nextReject = (reason?: string) => {
        const fail = onRejected?.(reason) ?? reason;
        return reject?.(fail);
      };

      if (this.#status === "Rejected") {
        nextReject(this.#reason);
      }

      if (this.#status === "Pending") {
        this.#fulfilledQueue.push(nextFulfilled);
        this.#rejectedQueue.push(nextReject);
      }
    };

    return new MyPromise(executor);
  }
}

const p1 = new MyPromise((resolve) => {
  resolve("constructor");
  // setTimeout(() => {
  // }, 1000);
});

const p2 = p1.then((first) => {
  console.log("first: ", first);
  return new MyPromise((resolved) => {
    setTimeout(() => {
      resolved?.("then1");
    }, 1000);
  });
});

p2.then((second) => {
  console.log("second: ", second);
  return "then2";
}).then((third) => {
  console.log("third: ", third);
});

// const p2 = new MyPromise((resolve, reject) => {
//     reject?.("Fail");
// }).then(
//   (first) => {
//     console.log('first: ', first);
//     return 'Then 1';
//   },
//   (reason) => {
//     console.error('error 1', reason);
//     return reason;
//   }
// ).then(
//   (first) => {
//     console.log('second: ', first);
//     return 'Then 2';
//   },
//   (reason) => {
//     console.error('error 2', reason);
//     return reason;
//   }
// );

// const promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("initialize");
//   });
//   // throw new Error('Error here!');
// })
//   .then((value) => {
//     console.log(`resolve from ${value}`);
//     return new MyPromise((resolve) => {
//       resolve("Promise");
//     });
//   })
//   .then((value) => {
//     console.log(`resolve from ${value}`);
//     return "primitive";
//   })
//   .then(
//     (value) => {
//       console.log(`resolve from ${value}`);
//     },
//     (err) => {
//       console.error(err.message);
//     },
//   );
