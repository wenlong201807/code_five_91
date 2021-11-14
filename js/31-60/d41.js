const kthPairDistance = function (nums, k) {
  nums.sort((a, b) => a - b);
  let maxDistance = nums[nums.length - 1] - nums[0];
  let distanceCounts = new Array(maxDistance + 1).fill(0);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      distanceCounts[nums[i] - nums[j]]++;
    }
  }
  let t = 0;
  for (let i = 0; i < distanceCounts.length; i++) {
    t += distanceCounts[i];
    if (t >= k) return i;
  }
};

console.log(kthPairDistance([1, 5, 3, 2], 1));
// https://github.com/leetcode-pp/91alg-5-daily-check/issues/58