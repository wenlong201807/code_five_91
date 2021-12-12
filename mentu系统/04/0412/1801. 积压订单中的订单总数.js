/**
 * 通过 https://leetcode-cn.com/problems/number-of-orders-in-the-backlog/submissions/
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
  let mod = 1000000007;
  let buy = new MaxPriorityQueue({ priority: (bid) => bid.price });//采购
  let sell = new MinPriorityQueue({ priority: (bid) => bid.price });//销售
  let total = 0;//最后的库存
  for (let [price, amount, orderType] of orders) {
    if (orderType === 0) {// 买
      while (!sell.isEmpty() && sell.front().priority <= price && amount > 0) {
        let head = sell.dequeue().element;
        if (amount < head.amount) {
          sell.enqueue({ price: head.price, amount: head.amount - amount });
          total -= amount;
          amount = 0;
        } else {
          amount -= head.amount;
          total -= head.amount;
        }
      }
      if (amount > 0) buy.enqueue({ price, amount }), total += amount;
    } else {// 卖orderType === 1
      while (!buy.isEmpty() && buy.front().priority >= price && amount > 0) {
        let head = buy.dequeue().element;
        if (amount < head.amount) {
          buy.enqueue({ price: head.price, amount: head.amount - amount });
          total -= amount;
          amount = 0;
        } else {
          amount -= head.amount;
          total -= head.amount;
        }
      }
      if (amount > 0) sell.enqueue({ price, amount }), total += amount;
    }
  }
  return total % mod;
};