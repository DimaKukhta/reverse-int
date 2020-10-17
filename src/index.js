module.exports = function reverse (n) {
  arr = n.toString().split('').reverse();
  n=0;
  arr.forEach(element => {
      n+=element;
  });
  return parseFloat(n);
}
