/**
 * 没写完
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let heap = [,], i = 0;
  while (i < k) {
    heap.push(nums[i++]);
  }
  buildHeap(heap, k);
  for (let i = k; i < nums.length; i++){
    if (heap[1] < nums[i]) {
      heap[1] = nums[i];
      heapify(heap, k, 1);
    }
  }
  return heap[1];
};

function heapify (arr, k, i) {
  while (true) {
    let minIndex = i;
    if (2 * i <= k && arr[2 * 1] < arr[i]) {
      minIndex = 2 * i;
    }
    if (2 * i + 1 <= k && arr[2 * i + 1] < arr[minIndex]) {
      minIndex = 2 * i + 1;
    }
    if (minIndex !== i) {
      
    }
  }
}