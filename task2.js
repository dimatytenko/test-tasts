const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

function foo(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      foo(obj[key]);
    } else if (obj[key] === 0) {
      obj[key] = 1;
    } else if (obj[key] === 1) {
      obj[key] = 0;
    }
  }
  return obj;
}

console.log(foo(d));

// {
// left: {
// left: {
// left: 0,
// right: {
// left: 1,
// right: 0,
// },
// },
// right: {
// left: 1,
// right: 0,
// },
// },
// right: 0,
// }
