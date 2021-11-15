# 题目名称

- [Delete Sublist to Make Sum Divisible By K](https://binarysearch.com/problems/Delete-Sublist-to-Make-Sum-Divisible-By-K)

## 解题思路

```javascript

1.学习  yingliufilms


```

### 代码块

```javascript

function deleteSubarray(arr, k) {
  // Stores the remainder of each
  // arr[i] when divided by K
  let mod_arr = new Array(arr.length);

  // Stores total sum of elements
  let total_sum = 0;

  // K has been added to each arr[i]
  // to handle negative integers
  for (let i = 0; i < arr.length; i++) {
    mod_arr[i] = (arr[i] + k) % k;

    // Update the total sum
    total_sum += arr[i];
  }

  // Remainder when total_sum
  // is divided by K
  let target_remainder = total_sum % k;

  // If given array is already
  // divisible by K
  if (target_remainder == 0) {
    return 0;
  }

  // Stores curr_remainder and the
  // most recent index at which
  // curr_remainder has occured
  let map = new Map();
  map.set(0, -1);

  let curr_remainder = 0;

  // Stores required answer
  let res = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    // Add current element to
    // curr_sum and take mod
    curr_remainder = (curr_remainder + arr[i] + k) % k;

    // Update current remainder index
    map.set(curr_remainder, i);

    let mod = (curr_remainder - target_remainder + k) % k;

    // If mod already exists in map
    // the subarray exists
    if (map.has(mod)) res = Math.min(res, i - map.get(mod));
  }

  // If not possible
  if (res == Number.MAX_SAFE_INTEGER || res == arr.length) {
    res = -1;
  }

  return res;
}
```

### 时间复杂度和空间复杂度

- 时间复杂度 O(n)
- 空间复杂度 O(1)
