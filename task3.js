function bar(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let l = n - i + 1;
    let subArr = [];
    for (let j = 1; j <= n; j++) {
      if (i === j || l === j) {
        subArr.push(2);
      } else if (i > j && l < j) {
        subArr.push(1);
      } else if (i < j && l > j) {
        subArr.push(1);
      } else {
        subArr.push(0);
      }
    }
    arr.push(subArr);
  }
  return arr;
}

console.log(bar(5));

/*[
[2,1,1,1,2],
[0,2,1,2,0],
[0,0,2,0,0],
[0,2,1,2,0],
[2,1,1,1,2],
]
*/
console.log(bar(4));
/*[
[2,1,1,2],
[0,2,2,0],
[0,2,2,0],
[2,1,1,2],
]
*/
console.log(bar(21));
