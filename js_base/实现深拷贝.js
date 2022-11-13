const isComplexDataType = (obj) =>
  obj instanceof Object && typeof obj !== "function";
const deepClone = function (obj, hash = new WeakMap()) {
  if (!isComplexDataType(obj)) {
    //基础类型,包括null和undefined
    return obj;
  } else {
    //防止循环引用
    if (hash.has(obj)) return hash.get(obj);

    let constructor = obj.constructor;
    //这里是为了得到所有的数据描述符的值,[Configurable],[Enumerable],[Writable],[Value]等
    const allDesc = Object.getOwnPropertyDescriptors(obj);
    let cloneObj;

    //Date和RegExp
    if (/^(Date|RegExp)$/i.test(constructor.name)) {
      cloneObj = new constructor(obj);
      Object.defineProperties(cloneObj, allDesc);
      return cloneObj;
    }
    //WeakMap和WeakSet不支持遍历, 没法copy
    //Map
    if (constructor.name === "Map") {
      cloneObj = new constructor();
      Object.defineProperties(cloneObj, allDesc);
      obj.forEach((value, key) => {
        cloneObj.set(key, deepClone(value, hash));
      });
      return cloneObj;
    }

    //Set
    if (constructor.name === "Set") {
      cloneObj = new constructor();
      Object.defineProperties(cloneObj, allDesc);
      obj.forEach((value) => {
        cloneObj.add(deepClone(value, hash));
      });
      return cloneObj;
    }

    //这里就是简单的对象Object or Array

    //Object.create原本是创建一个新对象,并将第一个参数作为新对象的__proto__
    //并且结合Descriptors方法后可以用第二个参数指定数据描述符
    //这样一来也考虑了数组
    cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);
    hash.set(obj, cloneObj);

    for (let key of Reflect.ownKeys(obj)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
    return cloneObj;
  }
};
