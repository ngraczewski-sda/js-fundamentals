function grumpyDoorman(name) {
  if (name === "Genowefa") {
    throw "You're not welcome here anymore!!!";
  }
  return "Hello sir/madam!";
}

try {
  grumpyDoorman("Genowefa");
} catch (e) {
  console.error(e);
}

console.log(grumpyDoorman("Janusz"));
