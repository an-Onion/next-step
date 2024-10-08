function deepCopy(obj) {
  if( typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if( obj instanceof Date) {
    return new Date(obj)
  }

  if( obj instanceof RegExp) {
    return new RegExp(obj)
  }

  if( Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const newObj = {};
  for(let key in obj){
    if(obj.hasOwnProperty(key)) {
        newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}


function shallowCopy(obj) {
    if( typeof obj !== 'object' || obj === null) {
        return obj;
    }
    return Object.assign({}, obj);
}