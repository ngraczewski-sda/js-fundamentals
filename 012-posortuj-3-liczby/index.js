// wersja bez tablic
function min(a, b) {
  return a > b ? b : a;
}

function max(a, b) {
  return a < b ? b : a;
}

function sortThreeNumbers(a, b, c) {
  let lo = min(min(a, b), c);
  let hi = max(max(a, b), c);
  let mid = a + b + c - lo - hi;

  let result = `${lo}`;
  if (mid !== lo) {
    result += ` ${mid}`;
  }
  if (hi !== mid) {
    result += ` ${hi}`;
  }

  return result;
}

function sortThreeNumbersWithMath(a, b, c) {
  let lo = Math.min(a, b, c);
  let hi = Math.max(a, b, c);
  let mid = a + b + c - lo - hi;

  let result = `${lo}`;
  if (mid !== lo) {
    result += ` ${mid}`;
  }
  if (hi !== mid) {
    result += ` ${hi}`;
  }

  return result;
}

// wersja z tablica
function sortThreeNumbersWithArray(a, b, c) {
  return [a, b, c]
    .sort()
    .filter(function (number, index, numbers) {
      if (index === 0) {
        return true;
      }

      if (number === numbers[index - 1]) {
        return false;
      }

      return true;
    })
    .join(" ");
}

console.log(sortThreeNumbers(3, 2, 2));
console.log(sortThreeNumbersWithMath(3, 2, 2));
console.log(sortThreeNumbersWithArray(3, 2, 2));
