function Person(name, surname, secret) {
  this.name = name;
  this.surname = surname;
  this.tellTheSecret = function () {
    return secret;
  };
}

Person.prototype.introduceYourself = function () {
  return "Hello! My name is " + this.name + " " + this.surname + "!";
};

const person = new Person("Janek", "Jankowski", "The secret ingridient is...");
console.log(person.secret);
console.log(person.tellTheSecret());
