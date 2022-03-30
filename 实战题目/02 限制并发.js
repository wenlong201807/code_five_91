// https://www.cnblogs.com/fuGuy/p/13112876.html

// 其他 https://www.cnblogs.com/wjyz/p/10541581.html

//promise并发限制
class PromisePool {
  constructor(max, fn) {
    this.max = max; //最大并发量
    this.fn = fn; //自定义的请求函数
    this.pool = []; //并发池
    this.urls = []; //剩余的请求地址
  }
  start(urls) {
    this.urls = urls; //先循环把并发池塞满
    while (this.pool.length < this.max) {
      let url = this.urls.shift();
      this.setTask(url);
    }
    //利用Promise.race方法来获得并发池中某任务完成的信号
    let race = Promise.race(this.pool);
    return this.run(race);
  }
  run(race) {
    race.then((res) => {
      //每当并发池跑完一个任务，就再塞入一个任务
      let url = this.urls.shift();
      this.setTask(url);
      return this.run(Promise.race(this.pool));
    });
  }
  setTask(url) {
    if (!url) return;
    let task = this.fn(url);
    this.pool.push(task); //将该任务推入pool并发池中
    // console.log(`\x1B[43m ${url} 开始，当前并发数：${this.pool.length}`);
    task.then((res) => {
      //请求结束后将该Promise任务从并发池中移除
      this.pool.splice(this.pool.indexOf(task), 1);
      // console.log(`\x1B[43m ${url} 结束，当前并发数：${this.pool.length}`);
    });
  }
}
//test
const URLS = [
  "bytedance.com",
  "tencent.com",
  "alibaba.com",
  "microsoft.com",
  "apple.com",
  "hulu.com",
  "amazon.com",
];
//自定义请求函数
var requestFn = (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`任务${url}完成`);
    }, 1000);
  }).then((res) => {
    console.log("外部逻辑", res);
  });
};
const pool = new PromisePool(3, requestFn); //并发数为5
pool.start(URLS);


/*
从上面可以看出，思路如下：定义一个 PromisePool 对象，初始化一个 pool 作为并发池，
然后先循环把并发池塞满，不断地调用 setTask 然后通过自己自定义的任务函数(任务函数可以是网络请求封装的 promise 对象，或者是其他的)，
而且每个任务是一个Promise对象包装的，执行完就 pop 出连接池， 任务push 进并发池 pool 中。
*/

 //利用Promise.race方法来获得并发池中某任务完成的信号
//  let race = Promise.race(this.pool);
//  return this.run(race);
 

// run(race) {
//   race
//       .then(res => {
//           //每当并发池跑完一个任务，就再塞入一个任务
//           let url = this.urls.shift();
//           this.setTask(url);
//           return this.run(Promise.race(this.pool));
//       })
// }
// 这个地方就是不断通过递归的方式，每当并发池跑完一个任务，就再塞入一个任务

// npm中有很多实现这个功能的第三方包，比如async-pool、es6-promise-pool、p-limit，也可以直接拿来用
