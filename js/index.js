var hacker1 = "Monika";
var hacker2 = "Anna";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
var newHacker1 = "";
for (var i = 0; i < hacker1.length; i++) {
  newHacker1 += hacker1[i].toUpperCase();
  newHacker1 += " ";
}
console.log(newHacker1);
console.log("---");

var newHacker2 = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  newHacker2 += hacker2[j];
}
console.log(newHacker2);

if (hacker1[0].toLowerCase() > hacker2[0].toLowerCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1[0].toLowerCase() < hacker2[0].toLowerCase()) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both have the same name?");
}

//Bonuses
var lorem =
  "Lorem et ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

var loremCounter = 0;
for (var i = 0; i < lorem.length; i++) {
  if (lorem[i] === " ") {
    loremCounter++;
  }
}
//5 spaces, but 6 words, so counter+1
console.log(`Number of words in Lorem Ipsum: ${loremCounter + 1}`);

let words = lorem.split(" ");
// console.log(words)
let etCounter = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    etCounter++;
  }
}
console.log(`Number of "et" words in Lorem Ipsum: ${etCounter}`);

//Palindroms
/*To test: 
"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?"
"No 'x' in Nixon". 
*/

var phraseToCheck = "A man, a plan, a canal, Panama!";
var phraseLowerCase = phraseToCheck.toLowerCase();
var newSentence = "";
var newPhrase = "";
for (var i = 0; i < phraseLowerCase.length; i++) {
  if (phraseLowerCase[i] >= "a" && phraseLowerCase[i] <= "z") {
    newSentence += phraseLowerCase[i];
  }
}
console.log(newSentence);

for (var i = phraseLowerCase.length - 1; i >= 0; i--) {
  if (phraseLowerCase[i] >= "a" && phraseLowerCase[i] <= "z") {
    newPhrase += phraseLowerCase[i].toLowerCase();
  }
}
console.log(newPhrase);

if (newSentence === newPhrase) {
  console.log("Palindrom!");
} else {
  console.log("This is not a Palindrom!");
}
