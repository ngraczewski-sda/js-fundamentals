function filter(items, matchingFn) {
  const matchingItems = [];

  for (let item of items) {
    if (matchingFn(item)) {
      matchingItems.push(item);
    }
  }

  return matchingItems;
}

function isOdd(number) {
  return number % 2 === 0;
}

function isTwoDigitNumber(number) {
  return number > 9 && number < 100;
}

const someNumbers = [1, 2, 123, 44, 53, 2123, 11, 23, 44, 8];
console.log(filter(someNumbers, isOdd));
console.log(filter(someNumbers, isTwoDigitNumber));
