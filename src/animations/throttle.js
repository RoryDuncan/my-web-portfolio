export default (delay, fn) => {

  let lastCalled = null;

  return (...args) => {
    let now = Date.now();
    if (lastCalled === null || now >= lastCalled + delay) {
      lastCalled = now;
      fn(...args)
    }
  }

}