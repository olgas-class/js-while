// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// 
// // Finchè i sia minore di 5 stampa
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// Cercare pera all'interno della lista
const fruit = ["mela", "pera", "arancia", "kiwi"];

let userFruit = "banana";

// let isFound = false;
// 
// for (let i = 0; i < fruit.length; i++) {
//     if (userFruit === fruit[i]) {
//         isFound = true;
//     }
//     console.log(fruit[i], isFound);
// }

// Controlla la frutta nella lista finché non trovi la pera
// let i = 0;
// let isFound = false;
// //              FALSE
// //        TRUE                      FALSE
// //       2 < 4                  TRUE === FALSE
// while (i < fruit.length && isFound === false) {
//     // const thisFruit = fruit[i]; // PERA
//     if (userFruit === fruit[i]) { // TRUE
//         isFound = true; // --> TRUE
//     }
//     console.log(fruit[i], isFound);
//     i++; // 2
// }
// 
// 
// console.log(i);

// Chiedere all'utente un numero, controllaer che l'input è valido, se no, richiederglielo. Chiedere il numero finchè l'input non sarà valido.

// let userNumber = parseInt(prompt("Dimmi un numero"));
// 
// console.log(userNumber);
// 
// while(isNaN(userNumber)) {
//    userNumber = parseInt(prompt("Non è un numero! Dimmi un numero!:(!")); 
//    console.log(userNumber);
// }

// let userNumber = 0;

// do {
//     userNumber = parseInt(prompt("Dimmi un numero"));
//     console.log(userNumber);
// } while (isNaN(userNumber))

// let i = 0;
// 
// while (i < 4) {
//     console.log(i);
//     i++;
// }

// let i = 0;
// 
// do {
//     console.log(i);
//     i++;
// 
// } while (i < 4)

// Creare array di 10 elementi con numeri random compresi tra 1 e 20, ma diversi tra di loro

const randomNumbers = [];
// 
// for (let i = 0; i < 10; i++) {
//     const rndNumber = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
//     // Se il numero non è incluso nell'array
//     //  Pusho
//     console.log(randomNumbers, rndNumber);
//     if (!randomNumbers.includes(rndNumber)) {
//         randomNumbers.push(rndNumber);
//     }
// }
// 
// console.log(randomNumbers);

// // finché l'array non raggiunge la lunghezza di 10
// while (randomNumbers.length < 10) {
//     const rndNumber = Math.floor(Math.random() * (20 - 1 + 1) ) + 1;
//     // Se il numero non è incluso nell'array
//     //  Pusho
//     console.log(randomNumbers, rndNumber);
//     if (!randomNumbers.includes(rndNumber)) {
//         randomNumbers.push(rndNumber);
//     }
// }
// 




