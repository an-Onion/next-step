function PromiseAll(promises: (PromiseLike<unknown> | unknown)[]): Promise<unknown[]> {
  return new Promise((resolve, reject) => {
    let ret: unknown[] = [];
    let count = 0;
    let len = promises.length
    for(let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then((data: unknown) => {
        ret[i] = data;
        count++;
        if( count === len  ) resolve(ret);
      }).catch((error: unknown) => reject(error));
    }
  })

}

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 100)
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 200)
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 300)
})

PromiseAll([p1,p2,p3]).then((data) => console.log(data))
