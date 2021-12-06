/**
 * 通过 https://leetcode-cn.com/problems/task-scheduler/submissions/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const freq = _.countBy(tasks);

  // Object.values() 手动循环对象的属性值 所给出的顺序相同。
  // 对象中的扩展运算符 ，用户取出参数对象中的所有可遍历的属性，拷贝到当前对象之中
  const maxExec = Math.max(...Object.values(freq));
  let maxCount = 0;
  Object.values(freq).forEach(v => {
    if (v === maxExec) {
      maxCount++;
    }
  })

  return Math.max((maxExec - 1) * (n + 1) + maxCount, tasks.length)
};