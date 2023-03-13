// Code your solutions in this file
/*
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/

function writeCards(stringNames, eventName) {
    const newStringNames = [];
    for (let i = 0; i < stringNames.length; i++) {
        debugger;
        newStringNames[i] = (`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`);
        //console.log(newStringNames[i]);
    }
    return newStringNames;
}

function countDown(positiveInteger) {
    // todo
    let countDo = positiveInteger;
    while (countDo >= 0) {
        console.log(countDo--);
    }
}

countDown(10);

writeCards(["Ramon", "Juan", "Miguel"], "birthday");
