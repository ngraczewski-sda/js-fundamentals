function printNumbersSpreadBy(start, end, jump) {
  for (let i = start; i <= end; i += jump) {
    console.log(i);
  }
}

printNumbersSpreadBy(1, 11, 5);
