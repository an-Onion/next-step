const fs = require("fs");

function promisify(fn) {
  return function iff(...args) {
    const bindFn = fn.bind(null, ...args);
    return new Promise((resolve, reject) => {
        bindFn((err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };
}

const readFileAsync = promisify(fs.readFile);

readFileAsync("./hello.txt", 'utf8')
.then((data) => {
    console.log('content', data);
}).catch((err) => {
    console.error('error', err);
});
