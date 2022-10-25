const one = new Promise((resolve, reject) => {
  resolve('Hello');
});
const two = one.then(value => {});
console.log(one === two);