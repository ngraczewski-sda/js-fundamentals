function evenNumbersBetween(a, b) {
  for (let i = a; i <= b; i++) {
    const isEven = i % 2 === 0;
    if (isEven) {
      console.log(i);
    }
  }
}

evenNumbersBetween(1, 100);
