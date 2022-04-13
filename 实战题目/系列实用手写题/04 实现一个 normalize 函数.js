// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/331

// 第 152 题：实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据 #331

// 一维数组转成单链表
function normalize(str) {
  debugger
  let arr = str.match(/\w+/g);
  let temp = {};
  let obj;
  while (arr.length) {
    let item = arr.pop();
    temp.value = item;
    obj && (temp.children = obj);
    if (arr.length) {
      obj = { ...temp };
      temp = {};
    } else {
      obj = temp; // { value: item, children: oldObj }
    }
  }
  return obj;
}


// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

const str = '[abc[bcd]][def]';
// const str = '[abc[bcd[def]]]';
console.log(normalize(str))