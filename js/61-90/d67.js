/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b)
  let j = people.length - 1
  let i = 0
  let ans = 0
  while (i < j) {
      if (people[j] + people[i] > limit) {
          j --
      } else {
          j --
          i ++
      }
      ans ++
  }

  if (i === j) {
      ans ++
  }

  return ans
};

// 作者：scnu_evan
// 链接：https://leetcode-cn.com/problems/boats-to-save-people/solution/javascript-tan-xin-881-jiu-sheng-ting-by-7005/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。