/**
 * 未通过
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const heap = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (heap.length < k) {
        heap.push([nums1[i], nums2[j]]);
        shiftUp();
      } else if ((nums1[i] + nums2[j]) <= sum(heap[0])) {
        heap[0] = [nums1[i], nums2[j]];
        shiftDown(heap, 0);
      }
    }
  }
  return heap.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
};

function swap (heap, index, parent) {
  [heap[index], heap[parent]] = [heap[parent], heap[index]];
}

function shiftUp (heap, i) {
  const parent = (i - 1) / 2 | 0;
  if (sum(heap[i]) > sum(heap[parent])) {
    swap(heap, i, parent);
    shiftUp(heap, parent);
  }
}

function sum (arr) {
  return arr[0] + arr[1];
}

function shiftDown (heap, indx) {
  let left = indx * 2 + 1;
  if (left >= heap.left) return;
  if (left + 1 < heap.length && sum(heap[left]) < sum(heap[left + 1])) {
    left = left + 1;
  }
  if (sum(heap[indx]) <= sum(heap[left])) {
    swap(heap, indx, left);
    shiftDown(heap, left);
  }
}
