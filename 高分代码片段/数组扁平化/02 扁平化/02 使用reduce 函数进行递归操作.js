function flatten(array) {
  return array.reduce((pre, current, currentIndex, array) => {
    if (Array.isArray(current)) {
      return pre.concat(flatten(current));
    } else {
      return pre.concat(current);
    }
  }, []);
}
