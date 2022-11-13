添加备注;

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  if (s.length === 0) return 0;
  let sum = 0;
  const S_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i].indexOf[("I", "X", "C")] === -1) {
      sum += S_MAP[s[i]];
      continue;
    }

    if (s[i + 1] && S_MAP[s[i + 1]] > S_MAP[s[i]]) {
      const tempSum = S_MAP[s[i + 1]] - S_MAP[s[i]];
      sum += tempSum;
      i++;
      continue;
    }

    sum += S_MAP[s[i]];
  }

  return sum;
};
