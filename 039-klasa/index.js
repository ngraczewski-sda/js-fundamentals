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

const person = new Person("Janek", "Jankowski", "The secret ingridient is...");
console.log(person.introduceYourself());
console.log(person.secret);
console.log(person.tellTheSecret());
