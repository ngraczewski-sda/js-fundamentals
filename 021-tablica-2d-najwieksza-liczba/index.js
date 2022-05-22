function max2dWithForLoop(array2d) {
  let max = array2d[0][0];

  for (let i = 0; i < array2d.length; i++) {
    for (let j = 0; j < array2d[i].length; j++) {
      max = array2d[i][j] > max ? array2d[i][j] : max;
    }
  }

  return max;
}

function max2dWithForOfLoop(array2d) {
  let max = array2d[0][0];

  for (let row of array2d) {
    for (let cell of row) {
      max = max > cell ? max : cell;
    }
  }

  return max;
}

function max2dWithReduce(array2d) {
  return array2d.reduce((max, row) => {
    const maxInRow = row.reduce(
      (max, number) => (max > number ? max : number),
      row[0]
    );
    return max > maxInRow ? max : maxInRow;
  }, array2d[0][0]);
}

const someNumbers = [
  [1, 2, 6, 4, 3, , 7, 54, 3, 4, 5],
  [32, 1, 4, 3, 5, 654, 43],
  [43, 214, 54, 3, 234, 65, 8776],
];

console.log(max2dWithForLoop(someNumbers));
console.log(max2dWithForOfLoop(someNumbers));
console.log(max2dWithReduce(someNumbers));
