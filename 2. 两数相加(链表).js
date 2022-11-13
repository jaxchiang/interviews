/**
 * 
 *  {给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 

示例 1：


输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。} l1 
 *  
 *
 */

function addTwoNumbers(l1, l2) {
  let curry = 0,
    node,
    prevNode;

  while (l1 || l2 || curry !== 0) {
    const val1 = l1?.val ? l1.val : 0;
    const val2 = l2?.val ? l2.val : 0;
    let sum = val1 + val2 + curry;
    curry = sum >= 10 ? 1 : 0;
    sum = sum % 10;

    const current = new ListNode(sum);
    if (prevNode) {
      prevNode.next = current;
    } else {
      node = current;
    }
    prevNode = current;

    l1 = l1?.next;
    l2 = l2?.next;
  }

  return node;
}
