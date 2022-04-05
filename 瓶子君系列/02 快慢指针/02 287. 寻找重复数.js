/*
分析 -- 双指针法（快慢指针）

审题: 只有一个重复的整数，而这个重复的整数的出现次数不确定
可以用 map 用空间换时间，也可以排序之后直接找，但是这样都不符合题意
之前在二分法 tab 中做了一次: 287. 寻找重复数
这道题是可以用快慢指针做的，就是将数组中的值当成是指向数组下标的指针，然后将整个数组转成链表；而题目就转成了，一直一个环形链表（有重复的值，也就是在链表中有重复指向的指针），求环的入口；
参考寻找环形链表的入口 -- 142. 环形链表 II
时间复杂度 O(N){O(N)}O(N)

作者：厨猿加加
链接：https://juejin.cn/post/7007969268222558215
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/

var findDuplicate = function (nums) {
  let slow = (fast = 0); // 初始节点
  while (fast && nums[fast]) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow === fast) {
      let next = 0;
      while (next !== slow) {
        slow = nums[slow];
        next = nums[next];
      }
      return slow;
    }
  }
};

const nums = [1,3,4,2,2]

console.log(findDuplicate(nums))