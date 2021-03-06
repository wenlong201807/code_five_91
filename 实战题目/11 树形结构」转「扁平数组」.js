// https://juejin.cn/post/6997445260632653861#heading-4

function flatten(tree, arr = []) {
  tree.forEach((item) => {
    const { children, ...props } = item;
    // 添加除了children的属性
    arr.push(props);
    if (children) {
      // 递归将所有节点加入到结果集中
      flatten(children, arr);
    }
  });
  return arr;
}

// 「扁平数组」转「树形结构」
function treeing(arr) {
  let tree = [];
  const map = {};
  for (let item of arr) {
    // 一个新的带children的结构
    let newItem = (map[item.id] = {
      ...item,
      children: [],
    });
    if (map[item.pid]) {
      // 父节点已存进map则在父节点的children添加新元素
      let parent = map[item.pid];
      parent.children.push(newItem);
    } else {
      // 没有父节点，在根节点添加父节点
      tree.push(newItem);
    }
  }
  return tree;
}
