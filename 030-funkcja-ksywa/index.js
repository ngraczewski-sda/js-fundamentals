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

function getNickname(person) {
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

const otherOlek = {
  name: "Aleksander",
  age: 1,
};

console.log(getNickname(otherOlek));
console.log(getNickname(olek));
