class Node {
  // node节点中value表示节点的值，next指向包含所有层数的下一节点的数组，类似于下一列
  constructor(value = null, size = 0) {
    this.value = value;
    this.next = new Array(size).fill(null);
  }
}
var Skiplist = function () {
  /**
   * defaultMaxLevel随机层数概率，也就是随机出的层数，
   * 在 第1层以上(不包括第一层)的概率，层数不超过maxLevel，层数的起始号为1
   */
  this.defaultMaxLevel = 16;
  this.defaultFactor = 0.25;
  this.head = new Node(null, this.defaultMaxLevel);
  this.curentLevel = 1; //表示当前nodes的实际层数，从1开始
};

/**
 * @param {number} target
 * @return {boolean}
 */
Skiplist.prototype.search = function (target) {
  let searchNode = this.head;
  for (let i = this.curentLevel - 1; i >= 0; i--) {
    searchNode = this.findClosest(searchNode, i, target);
    if (searchNode.next[i] != null && searchNode.next[i].value == target) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number} num
 * @return {void}
 */
Skiplist.prototype.add = function (num) {
  let level = this.randomLevel();
  let updateNode = this.head;
  let newNode = new Node(num, level);
  // 找到当前num所在的层数，并从该层开始添加，从结构中的当前层数开始找也就是最高层数往下找
  for (let i = this.curentLevel - 1; i >= 0; i--) {
    // 找到该层中距离num最近的node,将update传入有点类似于斜向下找
    updateNode = this.findClosest(updateNode, i, num);
    //这一层是小于num本身的层数时，就可以进行插入了，不是就不行
    if (i < level) {
      // 为空好办，直接插入
      if (updateNode.next[i] == null) {
        updateNode.next[i] = newNode;
      } else {
        let temp = updateNode.next[i];
        updateNode.next[i] = newNode;
        newNode.next[i] = temp;
      }
    }
  }
  // 完成后，发现随机出的层数大于了最大层，还需要更新最大层，
  // 并且让所有超过curentLevel的层的head 指向newNode
  if (level > this.curentLevel) {
    for (let i = this.curentLevel; i < level; i++) {
      this.head.next[i] = newNode;
    }
    this.curentLevel = level;
  }
};

/** 删除该节点
 * @param {number} num
 * @return {boolean}
 */
Skiplist.prototype.erase = function (num) {
  let flag = false;
  let searchNode = this.head;
  for (let i = this.curentLevel - 1; i >= 0; i--) {
    searchNode = this.findClosest(searchNode, i, num);
    if (searchNode.next[i] != null && searchNode.next[i].value == num) {
      // 删除就是链表的删除节点，next指向next.next
      searchNode.next[i] = searchNode.next[i].next[i];
      flag = true;
    }
  }
  return flag;
};

// 补充函数1：返回一个随即层数,控制在第一层的概率在3/4
Skiplist.prototype.randomLevel = function () {
  let level = 1;
  while (Math.random() < this.defaultFactor && level < this.defaultMaxLevel) {
    level++;
  }
  return level;
};
// 补充函数2:顺着当前层开始查找，找出第一个 node.next大于target的节点或者空节点也可以
// 由于是node.next大于该节点，那么就是node小于它，node.next大于它，正好可以插在node后面
Skiplist.prototype.findClosest = function (node, levelIndex, target) {
  while (
    node.next[levelIndex] != null &&
    node.next[levelIndex].value < target
  ) {
    node = node.next[levelIndex];
  }
  return node;
};

/**
 * Your Skiplist object will be instantiated and called as such:
 * var obj = new Skiplist()
 * var param_1 = obj.search(target)
 * obj.add(num)
 * var param_3 = obj.erase(num)
 */

// 作者：zlfhx8
// 链接：https://leetcode-cn.com/problems/design-skiplist/solution/jie-he-redissui-ji-ceng-shu-shi-xian-mei-s1h2/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
