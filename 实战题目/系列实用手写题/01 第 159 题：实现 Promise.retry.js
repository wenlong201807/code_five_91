// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/387

/*
实现 Promise.retry，成功后 resolve 结果，失败后重试，尝试超过一定次数才真正的 reject
*/

Promise.retry = function (promiseFn, times = 3) {
  return new Promise(async (resolve, reject) => {
    while (times--) {
      try {
        var ret = await promiseFn();
        resolve(ret);
        break;
      } catch (error) {
        if (!times) reject(error);
      }
    }
  });
};

function getProm() {
  const n = Math.random();
  return new Promise((resolve, reject) => {
    setTimeout(() => (n > 0.9 ? resolve(n) : reject(n)), 1000);
  });
}

Promise.retry(getProm);
