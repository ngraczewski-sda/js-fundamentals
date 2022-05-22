function greetAllEngWithFor(people) {
  for (let i = 0; i < people.length; i++) {
    greetEng(people[i]);
  }
}

function greetAllPlWithForOf(people) {
  for (let person of people) {
    greetPl(person);
  }
}

function greetAllEngWithForEach(people) {
  people.forEach((person) => greetEng(person));
}

function greetAllWithCallback(people, greetingFn) {
  people.forEach((person) => greetingFn(person));
}

const somePeople = [olek, otherOlek, stefcio, stevie, johnie];
greetAllEngWithFor(somePeople);
greetAllPlWithForOf(somePeople);
greetAllEngWithForEach(somePeople);
greetAllWithCallback(somePeople, greetEng);
greetAllWithCallback(somePeople, greetPl);
