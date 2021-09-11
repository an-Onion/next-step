Function.prototype.MyBind = function (context, ...param) {

  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const originalFunc = this;
  const fn = Symbol('fn');
  context[fn] = originalFunc;

  function fToB(...args) {
    const val = context[fn](...param, ...args);

    if( !new.target ) return val;

    return new originalFunc(...param, ...args);
  }

  if( originalFunc.prototype ){
    fToB.prototype = Object.create(originalFunc.prototype);
  }

  return fToB;
};

function original(a, b) {
  this.a = a;
  this.b = b;
  return 'a';
}

const func = original.MyBind({c: 'Garlic'}, 'Hello');
console.log(func('World'));

let hello = new func('World');
console.log(hello.a);
