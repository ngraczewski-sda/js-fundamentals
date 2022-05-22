function getNumbersDividableByN(a, b, n) {
  let result = "";
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      result += ` ${i}`;
    }
  }
  return result.trim();
}

function getNumbersDividableByNWithArray(a, b, n) {
  let result = [];
  for (let i = a; i <= b; i += 1) {
    if (i % n === 0) {
      result.push(i);
    }
  }

  return result.join(" ");
}

// wariant "sprytniejszy" - potencjalnie mniej obiegów pętli, zawsze równy liczbie elementów
// zwracanych
function getNumbersDividableByNPerformant(a, b, n) {
  const firstDividable = a % n === 0 ? a : a + (n - (a % n));

  if (firstDividable > b) {
    return "";
  }

  let result = "" + firstDividable;

  for (let i = firstDividable + n; i <= b; i += n) {
    result += " " + i;
  }

  return result;
}

console.log(getNumbersDividableByN(4, 100, 5));
console.log(getNumbersDividableByNWithArray(4, 100, 5));
console.log(getNumbersDividableByNPerformant(4, 100, 5));
