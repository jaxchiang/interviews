var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let range = [0, 0];

  for (i = 0; i < s.length; i++) {
    let start = i;
    let end = i;

    //解决奇偶的问题;
    while (end < s.length && s.charAt(end + 1) == s.charAt(start)) {
      end++;
    }

    i = end;

    while (
      start > 0 &&
      end < s.length - 1 &&
      s.charAt(start - 1) == s.charAt(end + 1)
    ) {
      start--;
      end++;
    }

    if (end - start > range[1] - range[0]) {
      range[0] = start;
      range[1] = end;
    }
  }

  return s.substring(range[0], range[1] + 1);
};
