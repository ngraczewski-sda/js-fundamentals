function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.introduceYourself = function () {
  return "Hello! My name is " + this.name + " " + this.surname + "!";
};

const person = new Person("Janek", "Jankowski");
console.log(person.introduceYourself());
