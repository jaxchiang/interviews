function PromiseAll(promiseList) {
  return new Promise((resolve, reject) => {
    const result = [];
    let i = 0;
    for (const p of promiseList) {
      p.then((value) => {
        result[i] = value;
        if (result.length === promiseList.length) {
          resolve(result);
        }
      }, reject);
      i++;
    }
  });
}
