/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  const emailToIndex = new Map();// 邮箱+坐标
  const emailToName = new Map();// 邮箱+名称
  let emailsCount = 0;// 初始化连通分量，邮箱里面第几个出现的
  for (const account of accounts) {
    const name = account[0];// 拿到每一个子数组名称
    const size = account.length;
    for (let i = 0; i < size; i++) {// 从第一个开始拿
      const email = account[i];// 拿到邮箱
      if (!emailToIndex.has(email)) {// 开始判断邮箱地址有没有放到map里面；通过邮箱找坐标
        emailToIndex.set(email, emailsCount++);// 存坐标
        emailToName.set(email, name);// 存名称
      }
    }
  }

  // 自此，就把两个 邮箱加名称和邮箱加坐标  map表格创建完了；
  // 拿到邮箱数量，创建并查集；
  const uf = new UnionFind(emailsCount);
  // 根据两个map 进行合并
  for (const account of accounts) {
    const firstEmail = account[1];// 拿到第一个邮箱
    const firstEmailIndex = emailToIndex.get(firstEmail);// 拿到map里面的下表
    const size = account.length;
    for (let i = 0; i < size; i++) {
      const nextEmail = account[i];// 拿到后面的邮箱
      const nextEmailIndex = emailToIndex.get(nextEmail);
      uf.unite(firstEmailIndex, nextEmailIndex);// 开始合并两个邮箱
    }
  }

  // 全给拿出来
  const indexToEmails = new Map();// K 是并查集的祖先坐标，V 是 所有邮箱的集合
  // 如果坐标当作k，如何拿到k
  for (const email of emailToIndex.keys()) {
    const index = uf.findSet(emailToIndex.get(email));// 拿到祖先坐标
    const account = indexToEmails.get(index) ? indexToEmails.get(index) : [];
    account.push(email);// 把邮箱添加完
    indexToEmails.set(index, account);// 根据祖先节点分好组
  }

  // 做用户之间的合并
  const merged = [];
  for (const emails of indexToEmails.values()) {
    emails.sort();
    const name = emailToName.get(emails[0]);// 拿到名称
    const account = [];
    account.push(name);
    account.push(...emails);
    merged.push(account);// 把数组集合添加进去
  }

  return merged;// 完成用户之间的合并
};

// 并查集的模板
class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((v, i) => i);
    this.rank = new Array(n).fill(1);
    this.setCount = n; // 连通分量
  }
  findSet (index) {
    if (this.parent[index] !== index) {
      this.parent[index] = this.findSet(this.parent[index]);
    }
    return this.parent[index];
  }
  unite (index1, index2) { // 合并
    // 拿到他们的顶点坐标
    let root1 = this.findSet(index1), root2 = this.findSet(index2);
    if (root1 !== root2) {
      // 判断一下各自集合的节点个数，节点少的集合要往节点多的集合上合并
      if (root1 < root2) {
        [root1, root2] = [root2, root1]; // root1 是节点个数多的集合
      }
      // 合并根节点
      this.parent[root2] = root1;
      // 计算已经合并的节点数量
      this.rank[index1] += this.root2;
      this.setCount--; // 合并一个，城市数量减去一
    }
  }
  getCount () {
    return this.setCount;
  }
  connected (index1, index2) { // 来判断两个顶点，是否是一个连通分量
    let root1 = this.findSet(index1), root2 = this.findSet(index2);
    return root1 === root2;
  }
}