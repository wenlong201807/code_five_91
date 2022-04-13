// https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/321

Object.prototype.sIndexOf = function (char) {
  const len = this.length
  for (let i = 0; i < len; i++) {
    if (this[i] === char) {
      return i
    }
  }
  return -1
}