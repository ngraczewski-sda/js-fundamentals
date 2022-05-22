class Person {
  constructor(name, surname, secret) {
    this.name = name;
    this.surname = surname;
    this.tellTheSecret = function () {
      return secret;
    };
  }

  introduceYourself() {
    return "Hello! My name is " + this.name + " " + this.surname + "!";
  }
}

class Spy extends Person {
  constructor(name, surname, secret) {
    super(name, surname, secret);

    this.tellTheSecret = function () {
      throw "I won't do that! Ever!";
    };
  }
}

const person = new Spy("Janek", "Jankowski", "The secret ingridient is...");
console.log(person.introduceYourself());
console.log(person.tellTheSecret());
