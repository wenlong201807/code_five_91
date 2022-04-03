const aa = 'aaa';
const bb = aa.indexOf('', -1)
// console.log(bb)



const a = 'aaababababa';
const b = a.match(/ab/g) // [ 'ab', 'ab', 'ab', 'ab' ]
// const b = a.match(/ab/) // [ 'ab', index: 2, input: 'aaababababa', groups: undefined ]
b.forEach((item) => {
  // console.log('item:', item)
})
// console.log(b)
// console.log(a)

// const c = 'abcdef'
// const d = c.slice(1,-1)// 左闭右开
// // const d = c.slice(1,2)
// console.log(c)
// console.log(d)

// const c = 'eaabcdefaannaau'
// // const d = c.split(/(aa)/, 6)// 左闭右开
// const d = c.split(/aa/)// 左闭右开
// // const d = c.slice(1,2)
// console.log(c)
// console.log(d)

// const c = 'eaabcdefaannaau'
// // const d = c.split(/(aa)/, 6)// 左闭右开
// const d = c.substring(1,4)
// console.log(c)
// console.log(d)

const c = 'eaabcdefaannaau'
// const d = c.split(/(aa)/, 6)// 左闭右开
// const d = c.codePointAt(1) // 字母转数字
// const e = c.charCodeAt(1) // 字母转数字
// console.log(c)
// console.log(d)
// console.log(e)
const y = 'a'
const f = y.repeat(2.5)
console.log(y)
console.log(f)


/**
1 c开头
charAt charCodeAt concat codePointAt

2 s开头
search slice split substr substring startsWith

3 t开头
toLocaleLowerCase toLocaleUpperCase toLowerCase toUpperCase toString trim

4 其他
normalize endsWith valueOf 
replace repeat 
indexOf inclueds
lastIndexOf localCompare

 */
