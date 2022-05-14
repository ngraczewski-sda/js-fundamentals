function getName(name) {
  switch (name) {
    case "John":
      return "Johnie";
    case "Steve":
      return "Stevie";
    case "Stefan":
      return "Stefcio";
    case "Aleksander":
      return "Olek";
    default:
      return name;
  }
}

function greetEng(name, age) {
  var helloMessage = `Hello ${getName(name)}.`;

  var ageMessage;
  if (age === 1) {
    ageMessage = "You're " + age + " year old.";
  } else {
    ageMessage = "You're " + age + " years old.";
  }

  var message = helloMessage + ageMessage;
  console.log(message);
}

function greetPl(name, age) {
  var helloMessage = `Cześć ${getName(name)}.`;

  var useSingular = age === 1;
  var lastDigit = age % 10;
  var useNominative =
    (age <= 5 || age >= 21) &&
    (lastDigit === 2 || lastDigit === 3 || lastDigit === 4);

  if (useSingular) {
    console.log(helloMessage + "Masz 1 rok.");
    return;
  }

  if (useNominative) {
    console.log(helloMessage + "Masz " + age + " lata.");
    return;
  }

  console.log(helloMessage + "Masz " + age + " lat.");
}
