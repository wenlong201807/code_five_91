// 参考资料 https://mp.weixin.qq.com/s/bZqtF6NmEnFbH2yarrV7SQ

/*
使用方式 const execFile = promisify(childProcess.execFile);
如何实现该效果？？
操作目标：promisify函数是把 callback 形式转成 promise 形式。

promisify 可能有的读者不是很了解。
接下来重点讲述下这个函数的实现。
promisify函数是把 callback 形式转成 promise 形式。
我们知道 Node.js 天生异步，错误回调的形式书写代码。回调函数的第一个参数是错误信息。也就是错误优先。
我们换个简单的场景来看。
*/

const imageSrc = 'https://www.themealdb.com/images/ingredients/Lime.png';

// 第一种
function loadImage(src, callback) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = '公众号若川视野专用图？';
  image.style = 'width: 200px;height: 200px';
  // image.onload = () => callback(null, image, '666'); // 可扩展更多参数
  image.onload = () => callback(null, image); // 可扩展更多参数
  image.onerror = () => callback(new Error('加载失败'));
  document.body.append(image);
}
// // 初级版本
// loadImage(imageSrc, function (err, content) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(content);
// });

// 第二种
// promise 来优化--还能接受
// const loadImagePromise = function (src) {
//   return new Promise(function (resolve, reject) {
//     loadImage(src, function (err, image) {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(image);
//     });
//   });
// };

// // 使用方式
// loadImagePromise(imageSrc)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// 第三种
// 通用版。我们需要封装一个比较通用的 promisify 函数。
function promisify(original) {
  console.info('original:', original); // loadImage函数
  function fn(...args) {
    console.info('args:', args); // 实参：为数组
    return new Promise((resolve, reject) => {
      args.push((err, ...values) => {
        console.info('values:', values);// 异步结果
        if (err) {
          return reject(err);
        }
        resolve(values);
      });
      console.info('args2:', args); // 实参：为数组
      // original.apply(this, args);
      Reflect.apply(original, this, args);
    });
  }
  return fn;// 只是将方法体导出，供外部调用（传入参数）
}

const loadImagePromise = promisify(loadImage);
// 使用方式一
loadImagePromise(imageSrc).then(res => console.info(res))
// 使用方式二
// async function load() {
//   try {
//     const res = await loadImagePromise(imageSrc);
//     console.log('res:', res);
//   } catch (err) {
//     console.log(err);
//   }
// }
// load();
