const myName = "Brian Holt";
console.log(myName);

// second part

const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

// the flow

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}

// example 1

if (2 + 2 === 4) {
  console.log("the fundamental principles of mathematics still hold true.");
} else {
  console.log("Uh, panic?");
}

// example 2

const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}

// loops

let participant = 0;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
participant = participant + 1;
console.log(participant);

// while loop

let count = 0;
while (count < 10) {
  count = count + 1;
}
console.log(count);

// for loop

let = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);

// exercise

const timesToRepeat = 100;
const character = "#";

let word = ""; // start with an empty string
for (let i = 0; i < timesToRepeat; i++) {
  word = word + character;
}

console.log(word);

// functions

function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

// example

function greet(firstName, lastName) {
  return `Hello ${firstName} ${lastName}! nice to meet you`;
}

console.log(greet("Brian", "Holt"));
console.log(greet("Jack", "Sparrow"));

// deferent type of functions

function dog() {
  console.log("dog");
}

const cat = function () {
  console.log("cat");
};

// the => is just = > put together, the font just combines them to one glyph
const cow = () => {
  console.log("cow");
};

console.log(dog);
console.log(cat);
console.log(cow);

// built in functions

const paragraph = "ThIs HaS wEiRd CaSiNg On It";
console.log(paragraph.toLowerCase());

// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());

// objects

const person = {
  name: "Brian",
  city: "Chicago",
  state: "Illinois",
  numberOfOrders: 28,
};

console.log(person.name);
console.log(person["name"]);

// arrays

const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
