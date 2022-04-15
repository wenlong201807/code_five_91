// https://programmercarl.com/0015.%E4%B8%89%E6%95%B0%E4%B9%8B%E5%92%8C.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC

// 循环内不考虑去重
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const resSet = new Set();
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    let l = i + 1,
      r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      resSet.add(`${nums[i]},${nums[l]},${nums[r]}`);
      l++;
      r--;
    }
  }
  return Array.from(resSet).map((i) => i.split(','));
};

// 去重优化
var threeSum = function (nums) {
  const len = nums.length;
  if (len < 3) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    // a去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1,
      r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum < 0) {
        l++;
        continue;
      }
      if (sum > 0) {
        r--;
        continue;
      }
      res.push([nums[i], nums[l], nums[r]]);
      // b c 去重
      while (l < r && nums[l] === nums[++l]);
      while (l < r && nums[r] === nums[--r]);
    }
  }
  return res;
};

