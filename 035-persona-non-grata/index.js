function greet(name) {
  if (name === "John") {
    throw "John, you're not welcome here anymore!!!";
  }
  return "Oh, hi " + name + "!";
}

const someNames = ["Steve", "Jurgen", "Antonina", "John", "Amelia"];

someNames.forEach(function (name) {
  try {
    console.log(greet(name));
  } catch (e) {
    console.error(e);
  }
});
