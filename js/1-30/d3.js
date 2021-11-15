/**
 * 通过
作者：zhu-wen-long-2
链接：https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/solution/1381-she-ji-yi-ge-zhi-chi-zeng-liang-cao-fpob/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */


/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
  this.arr = []
  this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.arr.length < this.maxSize) {
    this.arr.push(x)
  }

};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.arr.length) {
    return this.arr.pop()
  }

  return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const addValNum = Math.min(this.arr.length, k)
  for (let i = 0; i < addValNum; i++) {
    this.arr[i] = this.arr[i] + val
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

 var obj = new CustomStack(3)
 obj.push(1)
 obj.push(2)
 obj.push(3)
 obj.push(4)
 obj.push(5)
 console.log('obj:', obj)
 var param_2 = obj.pop()
 console.log('obj:', obj, param_2)
 obj.increment(2,6)
 console.log('increment:', obj)