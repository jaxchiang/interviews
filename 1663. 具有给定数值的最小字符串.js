var getSmallestString = function (n, k) {
  // k - n 每一位都是a的时候还差多少;i是下一个要进行填充的位
  let res = Array(n).fill("a"),
    remain = k - n,
    i = n - 1;
  while (remain) {
    if (remain > 25) {
      // 当前位无法填充完
      remain -= 25;
      res[i] = "z";
      i--;
    } else {
      // 当前位可以填充完剩余的值
      res[i] = String.fromCharCode(97 + remain);
      remain = 0;
    }
  }
  return res.join("");
};
