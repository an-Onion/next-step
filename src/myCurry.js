function curry(fn) {
  const length = fn.length;

  return function $curry(...args) {
    if (args.length >= length) {
      return fn.apply(this, args);
    } else {
      return $curry.bind(this, ...args);
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 输出 6
console.log(curriedSum(1, 2)(3)); // 输出 6

function add() {
  let sum = 0;
  function innerAdd(num) {
    sum += num;
    return innerAdd;
  }
  innerAdd.prototype.toString = function () {
    return sum;
  };
  return innerAdd;
}
console.log(add(1)(2)(3)); // 输出 6

