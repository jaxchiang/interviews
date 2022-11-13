/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  const reverse = (pre, head) => {
    if (!head) return pre;
    const tem = head.next;
    head.next = pre;
    pre = head;
    return reverse(pre, tem);
  };

  return reverse(null, head);
};
