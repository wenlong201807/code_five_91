/*
1. 检查是否为空数组
2. 建立一个长度为26的数组，起始值为0
3. 遍历所有字符串，将字母的出现频率放到数组的对应位置里，(利用ascii码) 
4. 遍历数组，按照相同字母出现频率进行分组，归类(使用hashmap)
5. 遍历map 将结果返回
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//  未通过
var groupAnagrams = function (strs) {
  if (strs.length === 0) {
    return []
  }

  const map = new Map()

  for (const str of strs) {
    const characters = Array(26).fill(0)
    console.log('characters:',characters)
    for (let i = 0; i < str.length; i++) {
      const ascii = str.charCodeAt(i) - 97;
      console.log(str.charCodeAt(i), str, 'ascii:', i, ascii)
      characters[ascii]++;
      console.log('变化之后characters:',characters)
    }

    const key = characters.join('');
    if (map.has(key)) {
      // map.set(key, map.get(key).push(str))
      map.set(key, [...map.get(key), str])
    } else {
      map.set(key, [str])

    }
  }

  console.log('map:', map)
  const result = []
  for (const arr of map) {
    result.push(arr[1])
  }
  console.log(result)
  return result;
};

const aa = ["bdddddddddd"]
// const aa = ["bdddddddddd","bbbbbbbbbbc"]
groupAnagrams(aa)