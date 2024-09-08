const input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
  f: 4,
  g: undefined
};

const output = flattenObject(input);
console.log(output);

function flattenObject(obj, prefix = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] !== "object" || obj[key] === null) {
        result[newKey] = obj[key];
        continue;
      }
      flattenObject(obj[key], newKey, result);
    }
  }
  return result;
}


let nestedArray = [1, [2, [3, [4]], 5]];  
console.log(flattenArray(nestedArray)); // 输出 [1, 2, 3, 4, 5]

function flattenArray(arr) {
    const result = [];
    
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}