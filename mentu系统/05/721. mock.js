var accountsMerge = function(accounts) {
  const emailToName = new Map();
  const emailToIndex = new Map();
  let emailCount = 0;
  for (const [name,...emails] of accounts) {
    for(const email of emails) {
      emailToIndex.set(email,emailCount++);
      emailToName.set(email,name);
    }
  }
  const unionFind = new UnionFind(emailCount);
  for (const [name,firstEmail,...nextEmails] of accounts) {
    for(const nextEmail of nextEmails) {
      unionFind.union(emailToIndex.get(firstEmail), emailToIndex.get(nextEmail));
    }
  }
  const indexToEmail = new Map();
  for (const email of emailToIndex.keys()) {
    const index = unionFind.find(emailToIndex.get(email));
    const array = indexToEmail.has(index) ? indexToEmail.get(index) : [];
    array.push(email);
    indexToEmail.set(index,array);
  }
  const result = [];
  for(const emails of indexToEmail.values()) {
    emails.sort();
    const [firstEmail] = emails;
    const name = emailToName.get(firstEmail);
    const array =[];
    array.push(name);
    array.push(...emails);
    result.push(array);
  }
  return result;
};
class UnionFind {
    constructor (n) {
        this.parent = new Array(n).fill(0).map((value, index) => index);
    }

    union (index1, index2) {
        this.parent[this.find(index2)] = this.find(index1);
    }

    find (index) {
        if (this.parent[index] !== index) {
            this.parent[index] = this.find(this.parent[index]);
        }
        return this.parent[index];
    }
}

// 作者：chiyu1996
// 链接：https://leetcode-cn.com/problems/accounts-merge/solution/javascriptbing-cha-ji-by-chiyu1996-r9q9/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。