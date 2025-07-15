const person = {
  name: "Alice",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  },
};

const anotherPerson = {
  name: "Bob",
};



person.greet.call(anotherPerson, 'Hello', '!');
// Output: Hello, my name is Bob!


person.greet.apply(anotherPerson, ['Hi', '...']);
// Output: Hi, my name is Bob...

const boundGreet = person.greet.bind(anotherPerson, 'Hey', '!!');
boundGreet();  // You can call it later
// Output: Hey, my name is Bob!!