const johnie = {
  name: "John",
  age: 25,
};

const stevie = {
  name: "Steve",
  age: 30,
};

const stefcio = {
  name: "Stefan",
  age: 16,
};

const olek = {
  name: "Aleksander",
  age: 1,
};

function getName(person) {
  switch (person) {
    case johnie:
      return "Johnie";
    case stevie:
      return "Stevie";
    case stefcio:
      return "Stefcio";
    case olek:
      return "Olek";
    default:
      return person.name;
  }
}

function greetEng(person) {
  const { age } = person;
  var helloMessage = `Hello ${getName(person)}. `;

  var ageMessage;
  if (age === 1) {
    ageMessage = "You're " + age + " year old.";
  } else {
    ageMessage = "You're " + age + " years old.";
  }

  var message = helloMessage + ageMessage;
  console.log(message);
}

function greetPl(person) {
  const { age } = person;
  var helloMessage = `Cześć ${getName(person)}. `;

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

const otherOlek = {
  name: "Aleksander",
  age: 1,
};

greetEng(olek);
greetPl(otherOlek);
