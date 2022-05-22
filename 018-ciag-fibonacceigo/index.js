function fibonacci(n) {
  let n2 = 0;
  let n1 = 1;

  if (n === 1) {
    return n2;
  }

  if (n === 2) {
    return n1;
  }

  let i = 3;
  while (i <= n) {
    n1 = n2 + n1;
    n2 = n1 - n2;
    i++;
  }

  return n1;
}

function fibonacciRecursive(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
