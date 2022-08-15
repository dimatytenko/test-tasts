const foo = (() => {
  let counter = 0;
  return () => {
    return (counter += 1);
  };
})();

console.log(foo()); //1
console.log(foo()); //2
console.log(foo()); //3
