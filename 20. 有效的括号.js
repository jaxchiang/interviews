/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    //获取字符串中的当前符号
    const start = s[i];
    //如果是开头的符号则先入栈,如果是结尾的符号,就要和栈顶的符号做比较,看能不能变成一对
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      //栈顶元素如果是符号开头,和当前遍历的符号如果是一对儿,则栈顶元素pop出去
      const end = stack[stack.length - 1];
      if (
        (start == ")" && end == "(") ||
        (start == "}" && end == "{") ||
        (start == "]" && end == "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};
