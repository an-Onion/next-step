// 写一个日志脱敏函数
// 脱敏规则如下：
// 1. 对key为email的值，保留email地址的前两位，例如：{email: "testEmail@gmail.com"}  -> {email: "te******@gmail.com"}
// 2. 将key为token, auth的值进行完整脱敏，例如： {token:'fjakdfjfdsajfh'} -> {token: '****'}
// 注意，该脱敏函数将被公司所有前端项目使用，会收到任意格式的日志，需要保证该函数的安全性，不会因为该函数导致项目crash,同时在未来，脱敏规则将不断扩充

const emailRegex = /^(\w{2})\w+@(\w+\.\w+)$/;

const desensitizationMap = {
  email: (str) => str.replace(emailRegex, "$1******@$2"),
  token: () => "****",
};

function deepCopy(log, weekMap = new WeakMap(), key) {
  if (typeof log !== "object") {
    if (!Object.keys(desensitizationMap).includes(key)) {
      return log;
    }
    return desensitizationMap[key](log);
  }

  if (Array.isArray(log)) {
    return log.map((val, index) => deepCopy(val, weekMap, index));
  }

  if (weekMap.has(log)) {
    return weekMap.get(log);
  }

  const ret = Object.create(Object.getPrototypeOf(log));

  for (const key in log) {
    if (log.hasOwnProperty(key)) {
      ret[key] = deepCopy(log[key], weekMap, key);
    }
  }

  weekMap.set(log, ret);
  return ret;
}

console.log(
  deepCopy({
    email: "te******@gmail.com",
    token: "fjakdfjfdsajfh",
    date: new Date(),
    arr: [{ token: "fjakdfjfdsajfh" }, 2, 3, { b: 2 }],
  }),
);
