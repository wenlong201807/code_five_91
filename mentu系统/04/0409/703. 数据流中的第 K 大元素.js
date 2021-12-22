/**
 * 没写完
 * 题目 https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
 * 思路
 * 给定我们需求，要求实现KthLargest类以及对应的方法
 * add 每次添加值后，要返回排序后第k大的元素。
 * 
 * 具体执行机制设定
 * 我们可以维护一个大小为k的小根堆，用来存储前k个最大的元素。
 * 每次添加一个元素的时候，就将该元素加入小根堆中，如果此时的堆大小比k大，我们就将堆顶的元素弹出
 * 小根堆的堆顶就是我们的第k大元素。
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function (nums, k) {
  this.k = k;
  this.heap = new MinHeap();
  for (n of nums) {
    this.add(n);
  }
};

findKthLargest.prototype.add = function (val) {
  this.heap.offer(val);// 加入当前值
  if (this.heap.size()>this.k) {// 判断小根堆是否达到了最大长度，如果是，就直接返回堆顶元素，
    this.heap.poll();
  }
  return this.heap.peek();
}

class MinHeap{
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }
  heapify () {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++){
      this.bubbleUp(i);
    }
  }
  peek () {
    if (this.size() === 0) {
      return null;
    }
    return this.data[0];
  }
  offer (value) {
    this.data.push(value);
  }
}