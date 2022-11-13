/**
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
示例 1：

输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：
输入：head = [5], left = 1, right = 1
输出：[5]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/reverse-linked-list-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var reverseBetween = function (head, m, n) {
  // 用来记住整个链表的头节点位置
  let res = new ListNode(0);
  res.next = head;
  // 找到需要反转的位置
  let pre = res;
  for (let i = 1; i < m; ++i) {
    pre = pre.next;
  }
  // 将head指向要反转的链表部分的头部
  head = pre.next;
  for (let i = m; i < n; ++i) {
    let nxt = head.next;
    // nxt 节点要被放到反转部分的头部，所以将head的next指向它的下下个节点
    head.next = head.next.next;
    // 将nxt放到头部，pre.next指向的是反转部分的头部节点
    nxt.next = pre.next;
    // 重新将pre指向反转部分的头部
    pre.next = nxt;
  }
  return res.next;
};
