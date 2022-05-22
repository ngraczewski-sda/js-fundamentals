function logItemsWithForLoop(items) {
  for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
  }
}

function logItemsWithForOfLoop(items) {
  for (let item of items) {
    console.log(item);
  }
}

function logItemsWithForEach(items) {
  items.forEach(function (item) {
    console.log(item);
  });
}

const someItems = [1, "string", "Tomek", true, false, 0];

logItemsWithForLoop(someItems);
logItemsWithForOfLoop(someItems);
logItemsWithForEach(someItems);
