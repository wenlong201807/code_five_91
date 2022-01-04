// 将nums1 和 nums2 合并
function merge(nums1, nums2) {
  let ret = [];
  let i = j = 0;
  while (i < nums1.length || j < nums2.length) {
    if (i === nums1.length) {
      ret.push(nums2[j]);
      j++;
      continue;
    }

    if (j === nums2.length) {
      ret.push(nums1[i]);
      i++;
      continue;
    }
    const a = nums1[i];
    const b = nums2[j];
    if (a > b) {
      ret.push(nums2[j]);
      j++;
    } else {
      ret.push(nums1[i]);
      i++;
    }
  }
  return ret;
}