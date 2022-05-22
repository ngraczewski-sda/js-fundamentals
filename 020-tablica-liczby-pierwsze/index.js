function isPrime(n) {
  // dla każdej liczby większej od 1 i mniejszej od n sprawdzamy czy nasza liczba jest podzielna przez
  // n, jeżeli jest podzielna przez którąkolwiek to znaczy, że nie jest pierwsza (poza liczba 2)
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return n === 2;
    }
  }
  return n !== 1;
}

function isPrimeBitSmarter(n) {
  // na początku odsiewamy liczby parzyste poza 2, które na pewno nie są pierwsze
  if (n % 2 === 0) {
    return n === 2;
  }

  // sprawdzamy tylko liczby nieparzyste mniejsze od pierwiastka z n
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }
  }

  return n !== 1;
}

function searchWithForLoop(numbers, checkFn) {
  const matchingNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (checkFn(numbers[i])) {
      matchingNumbers.push(numbers[i]);
    }
  }

  return matchingNumbers;
}

function searchWithForOfLoop(numbers, checkFn) {
  const matchingNumbers = [];

  for (let number of numbers) {
    if (checkFn(number)) {
      matchingNumbers.push(number);
    }
  }

  return matchingNumbers;
}

function searchWithForEach(numbers, checkFn) {
  return numbers.filter(checkFn);
}

function test(numbers, iteratingFn, checkFn) {
  console.log(iteratingFn(numbers, checkFn));
}

const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

test(someNumbers, searchWithForEach, isPrime);
test(someNumbers, searchWithForEach, isPrimeBitSmarter);
