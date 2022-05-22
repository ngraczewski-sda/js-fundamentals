function getEvenNumbersWithForLoop(numbers) {
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

function getEvenNumbersWithForOfLoop(numbers) {
  const evenNumbers = [];

  for (let number of numbers) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

function getEvenNumbersWithFilter(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

const someNumbers = [1, 2, 4, 5, 12, 32, 443, 545, 12];

console.log(getEvenNumbersWithForLoop(someNumbers));
console.log(getEvenNumbersWithForOfLoop(someNumbers));
console.log(getEvenNumbersWithFilter(someNumbers));
