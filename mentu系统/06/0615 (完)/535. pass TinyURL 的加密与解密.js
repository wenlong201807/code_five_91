/**
 * 题目 https://leetcode-cn.com/problems/encode-and-decode-tinyurl/
 * 通过 https://leetcode-cn.com/problems/encode-and-decode-tinyurl/submissions/
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let map = {};
let str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function getRanddom (str) {
  let res = "";
  for (i = 0; i < 6; i++) {
    res += str[Math.floor(Math.random() * 61)];
  }
  return res;
}

var encode = function (longUrl) {
  let result = getRanddom(str);
  while (map[result]) {
    result = getRanddom(str);
  }
  map[result] = longUrl;
  return "http://tinyurl.com" + result;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  let key = shortUrl.slice(-6);
  return map[key];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */