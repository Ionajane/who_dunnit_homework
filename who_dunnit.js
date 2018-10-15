  // EPISODE ONE

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };

// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(verdict);

// OUTPUT:
// The murderer is Miss Scarlet.


// EPISODE TWO

// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// };

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// OUTPUT:
// There is two people assigned as the murderer but both are a constant which cannot be changed. The murderer is Professor Plum


// EPISODE THREE
//
// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// };

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// // OUTPUT:
// The murderer is Mrs Peacock.
// First Verdict: Mrs Peacock.
// The murderer is Professor Plum.
// Second Verdict: Professor Plum.


// // EPISODE FOUR

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// };

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// // OUTPUT:
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// Suspect three is Mrs.Peacock


// // EPISODE FIVE

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// };

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// };

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// OUTCOME:
// The weapon is the Revolver


// // EPISODE SIX

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   };
//   plotTwist();
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// OUTCOME -----------------------?
// The murderer is Mrs.White


// EPISODE SEVEN

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// OUTCOME:
// The murderer is Mr Green.


// EPISODE EIGHT

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// OUTCOME:
// The weapon is Candle Stick.

// EPISODE NINE

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// OUTCOME:
// The murderer is Professor Plum.


/////////////////////////////////
