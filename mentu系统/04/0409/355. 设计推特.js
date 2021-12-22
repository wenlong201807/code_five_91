/**
 * 用户类：发推，关注列表Set()，取消关注列表
 * 推文：推文10，推文时间
 * 大根堆：（容量为10），用来筛选出自身推文以及关注的用户的推文中，最新的十条推文
 * 推特：用户的集合Map()，发推文->首先判断一下当前用户是否注册，如果没注册，先给它注册（放到map里），然后获取到用户，将推文放到推文列表里。
 * 获取最新的十条推文， -> 通过当前的用户，获取关注的所有用户，再拿到所有用户的推文，仍进堆里。就能筛选出最新的十条推文
 * 关注、取消关注：首先判断用户是否存在，如果不存在就创建用户，如果存在，将用户2从用户1的关注列表中添加进去/删除
 * 数字不正确，其他正常
*/
var Twitter = function () {
  this.userMap = new Map();
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  if (!this.userMap.has(userId)) {
    this.userMap.set(userId, new User(userId));
  }
  var u = this.userMap.get(userId);
  u.post(tweetId)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  var h = new Heap();
  var res = [], candidates = [];
  if (!this.userMap.has(userId)) {
    return res;
  }
  for (let ids of this.userMap.get(userId).followed) {
    candidates = candidates.concat(this.userMap.get(ids).tweets);
  }
  h.build(candidates, "time");
  while (res.length < 10 && h.data.length) {
    res.push(h.deleting("time").tweenId);
  }
  return res;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.userMap.has(followerId)) {
    this.userMap.set(followerId, new User(followerId));
  }
  if (!this.userMap.has(followeeId)) {
    this.userMap.set(followeeId, new User(followeeId));
  }
  this.userMap.get(followerId).follow(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (this.userMap.has(followerId)) {
    this.userMap.get(followerId).unfollow(followeeId);
  }
};

var timeStamp = 0;
var Tweet = function (tweetId, timeStamp) {
  this.tweetId = tweetId;
  this.time = timeStamp;
}
var User = function (userId) {
  this.id = userId;
  this.followed = new Set();
  this.tweets = [];
  this.follow(userId);
}
User.prototype.follow = function (userId) {
  this.followed.add(userId);
}
User.prototype.unfollow = function (userId) {
  if (userId !== this.id) {
    this.followed.delete(userId);
  }
}
User.prototype.post = function (tweenId) {
  var tweet = new Tweet(tweenId, timeStamp);
  timeStamp++;
  this.tweets.unshift(tweet);
}

function Heap () {
  this.data = [];
  this.build = build;
  this.insert = insert;
  this.deleting = deleting;
  this.heapSort = heapSort;
};

function build (arr, key) {
  for (let i = 0; i < arr.length; i++) {
    this.insert(arr[i], key);
  }
}

function insert (val, key) {
  this.data.push(val);
  var idx = this.data.length - 1;
  var fatherIndx = Math.floor((idx - 1) / 2);
  while (fatherIndx >= 0) {
    if (this.data[fatherIndx][key] < this.data[idx][key]) {
      var temp = this.data[idx];
      this.data[idx] = this.data[fatherIndx];
      this.data[fatherIndx] = temp;
    }
    idx = fatherIndx;
    fatherIndx = Math.floor((idx - 1) / 2);
  }
}

function deleting (key) {
  if (this.data.length === 1) {
    return this.data.pop();
  }
  var idx = 0;
  var val = this.data[idx];
  this.data[idx] = this.data.pop();
  while (idx < this.data.length) {
    var left = 2 * idx + 1;
    var right = 2 * idx + 2;
    var select = left;
    if (right < this.data.length) {
      select = (this.data[left][key] < this.data[right][key] ? right : left);
    }
    if (select < this.data.length && this.data[idx][key] < this.data[select][key]) {
      var temp = this.data[idx];
      this.data[idx] = this.data[select];
      this.data[select] = temp;
    }
    idx = select;
  }
  return val;
}

function heapSort () {
  let res = [];
  while (this.data.length > 0) {
    res.unshift(this.deleting());
  }
  return res;
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */