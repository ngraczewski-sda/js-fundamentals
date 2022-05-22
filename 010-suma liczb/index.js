function sumNumbersBetween(a, b) {
  let sum = 0;

  for (let i = a; i <= b; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumNumbersBetween(1, 100));
