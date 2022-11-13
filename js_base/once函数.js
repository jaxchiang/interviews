function once(fn) {
  let result;
  let revoked = false;

  return (...args) => {
    if (revoked) return result;
    const r = fn(...args);
    revoked = true;
    result = r;
    return result;
  };
}
