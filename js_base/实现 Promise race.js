function race(promiseList) {
  return new Promise((resolve, reject) => {
    for (const p of promiseList) {
      p.then((value) => {
        resolve(value);
      }, reject);
    }
  });
}
