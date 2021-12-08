/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function (barcodes) {
  const map = {};

  for (let i = 0; i < barcodes.length; i++) {
    const barcode = barcodes[i];
    map[barcode] = (map[barcode] || 0) + 1;
  }

  // 堆的数据结构 [barcode, count]
  const list = Object.keys(map).map((b) => [Number(b), map[b]]);
  const heap = new MaxHeap(list, function comparator(inserted, compared) {
    return inserted[1] < compared[1];
  });

  const res = Array(barcodes.length);
  let i = 0;

  while (heap.size() > 0) {
    let [barcode, count] = heap.pop();

    while (count-- > 0) {
      if (i >= barcodes.length) i = 1;

      res[i] = barcode;
      i += 2;
    }
  }
  return res;
};

// **************************************************

class Heap {
  constructor(list = [], comparator) {
    this.list = list;
    this.comparator = comparator;

    this.init();
  }

  init() {
    const size = this.size();
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
      this.heapify(this.list, size, i);
    }
  }

  insert(n) {
    this.list.push(n);
    const size = this.size();
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
      this.heapify(this.list, size, i);
    }
  }

  peek() {
    return this.list[0];
  }

  pop() {
    const last = this.list.pop();
    if (this.size() === 0) return last;
    const returnItem = this.list[0];
    this.list[0] = last;
    this.heapify(this.list, this.size(), 0);
    return returnItem;
  }

  size() {
    return this.list.length;
  }
}

class MaxHeap extends Heap {
  constructor(list, comparator) {
    super(list, comparator);
  }

  heapify(arr, size, i) {
    let largest = i;
    const left = Math.floor(i * 2 + 1);
    const right = Math.floor(i * 2 + 2);

    if (left < size && this.comparator(arr[largest], arr[left])) largest = left;
    if (right < size && this.comparator(arr[largest], arr[right]))
      largest = right;

    if (largest !== i) {
      [arr[largest], arr[i]] = [arr[i], arr[largest]];
      this.heapify(arr, size, largest);
    }
  }
}

// 作者：suukii
// 链接：https://leetcode-cn.com/problems/distant-barcodes/solution/1054-ju-chi-xiang-deng-de-tiao-xing-ma-d-rjpk/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
