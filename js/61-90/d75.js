/*
 * trie 节点
 */
function TreeNode(val) {
  this.children = {};
  this.isword = false; //标记是否是字符串结尾
  this.index = -1; //标记单词在数组中的位置
}

var Trie = function () {
  this.root = new TreeNode();
  this.count = 0; //记录字符串的个数，用来给字符串节点标记次序
};
/**
 * Trie 树的插入
 * */
Trie.prototype.insert = function (word) {
  if (!word) return;
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      node.children[word[i]] = new TreeNode();
    }
    node = node.children[word[i]];
  }
  node.index = this.count;
  node.isword = true;
  this.count++;
};
/**
 * Trie 树的字符串搜索
 * */
Trie.prototype.search = function (word) {
  if (!word) return false;
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      node = node.children[word[i]];
    } else {
      return false;
    }
  }
  return node.isword;
};
/**
 * Trie 查找是否有已prefix开头的字符串
 * */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) return false;
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    if (node.children[prefix[i]]) {
      node = node.children[prefix[i]];
    } else {
      return false;
    }
  }
  return true;
};
/**
 * @param {string} big
 * @param {string[]} smalls
 * @return {number[][]}
 */
var multiSearch = function (big, smalls) {
  let result = Array(smalls.length)
    .fill(0)
    .map(() => []); //预生成数组
  let maxLength = Math.max(...smalls.map((small) => small.length)); //计算smalls中字符串的最大长度
  let trie = new Trie(); //预建trie树
  //将smalls 字符串插入树中
  for (let i = 0; i < smalls.length; i++) {
    trie.insert(smalls[i]);
  }

  for (let i = 0; i < big.length; i++) {
    if (!trie.startsWith(big[i])) continue; //查找是否以 big[i] 开头的字符串，没有则跳过本次执行
    let str = big.slice(i, i + maxLength);
    let node = trie.root;
    for (let j = 0; j < str.length; j++) {
      let jchar = str[j];
      if (!node.children[jchar]) {
        break;
      }
      node = node.children[jchar];
      if (node.isword) {
        result[node.index].push(i);
      }
    }
  }
  return result;
};

//  作者：archy666
//  链接：https://leetcode-cn.com/problems/multi-search-lcci/solution/trie-shu-by-archy666/
//  来源：力扣（LeetCode）
//  著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
