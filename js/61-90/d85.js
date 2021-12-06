// 遍历数组，将数组元素依次插入堆中
// 插入堆的过程中，如果堆大小超过k，将堆顶(最小) 的去掉
// 返回堆顶，此时堆顶就是第k大的元素（比它小的都被去掉了，比它大的在堆下面）

class MinHeap {
  constructor() {
    this.heap = [];
  }
  // 交换节点位置
  swap(i1, i2) {
    [this.heap[i1], this.heap[i2]] = [this.heap[i2], this.heap[i1]];
  }
  // 获得父节点
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  // 获得左节点
  getleftIndex(i) {
    return 2 * i + 1;
  }
  // 获得右节点
  getrightIndex(i) {
    return 2 * i + 2;
  }
  // 上移
  shiftUp(index) {
    if (index === 0) return;

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  // 下移
  shiftDown(index) {
    const leftIndex = this.getleftIndex(index);
    const rightIndex = this.getrightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  // 插入
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  // 删除堆顶
  pop() {
    // pop()方法删除数组最后一个元素并返回，赋值给堆顶
    this.heap[0] = this.heap.pop();
    // 对堆顶重新排序
    this.shiftDown(0);
  }
  // 获取堆顶
  peek() {
    return this.heap[0];
  }
  // 获取堆的大小
  size() {
    return this.heap.length;
  }
}

const findKthLargest = (nums, k) => {
  const minHeap = new MinHeap();
  for (const num of nums) {
    // 将数组元素依次插入堆中
    minHeap.insert(num);
    // 如果堆大小超过k， 开始裁员， 将堆顶(最小) 的去掉
    if (minHeap.size() > k) minHeap.pop();
  }
  // 返回堆顶，此时就是第k大的元素
  return minHeap.peek();
};

// 作者：lzxjack
// 链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/wei-hu-zui-xiao-dui-javascript-by-lzxjac-ed18/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
