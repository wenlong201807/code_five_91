class Heap {
  constructor(data) {
    this.data = data;
    this.compartor = (a, b) => a - b;
    this.heapify();
  }
  size () {
    return this.data.length;
  }
  heapify () {
    if (this.size() < 2) {
      return;
    }
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }
  peek () {
    if (!this.size()) {
      return null;
    }
    return this.data[0];
  }
  offer (val) {
    this.data.push(val);
    this.bubbleUp(this.size() - 1);
  }
  poll () {
    if (!this.size()) {
      return null;
    }
    let res = this.data[0];
    this.data[0] = this.data.pop();
    if (this.size()) {
      this.bubbleDown(0);
    }
    return res;
  }
  swap (i, j) {
    if (i === j) return;
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
  }
  // 上浮
  bubbleUp (index) {
    // 向上调整，我们最高要调整到0号位置
    while (index) {
      // 获取当前节点的父节点
      const parentIndex = (index - 1) >> 1;
      // const parentIndex = Math.floor((index - 1) / 2);
      // const parentIndex = (index - 1) / 2 | 0;
      // 比较父节点的值和当前的值，哪个小
      if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
        // 交换父节点和子节点
        this.swap(index, parentIndex);
        // index 向上走一步，进行下一次交换
        index = parentIndex
      } else {
        // 防止死循环
        break;
      }
    }
  }
  // 下ceng
  bubbleDown (index) {
    // 要获取到最大的下标，保证不会交换出界
    let lastIndex = this.size() - 1;
    while (index < lastIndex) {
      // 获取左右儿子的下标
      let leftIndex = index * 2 + 1;
      let rightIndex = index * 2 + 2;
      // 待交换节点
      let findIndex = index;
      if (leftIndex < lastIndex && this.compartor(this.data[leftIndex], this.data[index]) < 0) {
        findIndex = leftIndex;
      }
      if (rightIndex <= lastIndex && this.compartor(this.data[rightIndex], this.data[index]) < 0) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }
}

let arr = [8, 7, 6, 5, 4, 3, 2, 1];
let minHeap = new Heap(arr);
console.log(minHeap)