/*
1.给数组排序
2.遍历数组，从0遍历到length-2;
3.如果当前的数字等于前一个数字，则跳过这个数字 [难点]
4.如果数字不同，则设置start = i+ 1，end = length - 1 查看i, start, end 三个数的和比零大还是比零小，
  如果比0小，start ++ ，如果比零大，end --;
5.返回结果
*/

var threeSum1 = function (nums) {
  const newArr = nums.sort((a, b) => a - b);
  console.log('newArr:', newArr);
  const resultArr = [];

  for (let i = 0; i < newArr.length - 2; i++) {
    // if (i === 0 || nums[i] !== nums[i - 1]) {

      let end = newArr.length - 1;
      let mid = i + 1;
      let threeSum = newArr[i] + newArr[mid] + newArr[end];
  
      while (threeSum > 0 && mid < end) {
        end--;
        threeSum = newArr[i] + newArr[mid] + newArr[end];
      }
      while (threeSum < 0 && mid < end) {
        threeSum = newArr[i] + newArr[mid] + newArr[end];
        mid++;
      }
  
      if (threeSum === 0) {
        resultArr.push([newArr[i], newArr[mid], newArr[end]])
      }
    // }

  }

  console.log('resultArr:', resultArr);
  return resultArr;
};

// const nums = [0, 0, 0, 0];
// const nums = [0, 0, 0];
// const nums = [-1, 0, 1];
const nums = [-1, 0, 1, 2, -1, -4];
threeSum1(nums)

var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  console.log('nums:', nums);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let end = nums.length - 1;
      let start = i + 1;

      while(start < end) {
        if ((nums[i] + nums[start] + nums[end]) === 0) {
          result.push([nums[i], nums[start], nums[end]])
          start++;
          end--;
          while(start < end && nums[start] === nums[start-1]) {
            start++;
          }
          while(start < end && nums[end] === nums[end+1]) {
            end--;
          }
        } else if ((nums[i] + nums[start] + nums[end]) < 0) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  console.log('result:', result);
  return result;
};
// threeSum(nums)
