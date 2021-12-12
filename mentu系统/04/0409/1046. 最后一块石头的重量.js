/**
 * 官方解法 new MaxPrioriytQueue(); 不能使用，未通过
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPrioriytQueue();// 大顶堆
  for (let i = 0; i < stones.length; i++) {
    maxHeap.enqueue('x', stones[i]);
  }
  while (maxHeap.size() > 1) {
    const a = maxHeap.dequeue()['priority'];
    const b = maxHeap.dequeue()['priority'];
    if (a > b) {
      maxHeap.enqueue('x', a - b);
    }
  }
  return maxHeap.isEmpty() ? 0 : maxHeap.dequeue()['priority'];
};