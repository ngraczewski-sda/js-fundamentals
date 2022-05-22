function doNTimes(n, fn) {
  let i = 0;
  while (i < n) {
    fn(i++);
  }
}

function someCallback(i) {
  console.log(`Going through the iteration number ${i}`);
}

doNTimes(100, function (i) {
  console.log(`Doing it for ${i + 1}th time!`);
});

doNTimes(100, someCallback);
