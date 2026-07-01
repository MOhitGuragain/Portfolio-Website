// const num = Math.floor(Math.random() * 10) + 1;

// let count = 0;
// const maxTries = 5;

// function guessGame() {
//     while (count < maxTries) {
//         const userNum = Number(prompt("Enter a number between 1 and 10"));

//         if (!userNum || userNum < 1 || userNum > 10) {
//             alert("Enter a valid number between 1 and 10");
//             continue;
//         }

//         count++;

//         if (userNum > num) {
//             alert("Too high");
//         } else if (userNum < num) {
//             alert("Too low");
//         } else {
//             alert(`You win in ${count} tries!`);
//             return;
//         }
//     }

//     alert(`Game over! The number was ${num}`);
// }

// guessGame();

// const add = (a, b)=> a+b;
// console.log(add (5,6));
// function CelsiusToFahrenheit(c){
//     return (c *9/5)+32;
// }
// console.log(`${CelsiusToFahrenheit(37)}F`);

// let x=1;
// while(x <10){
//     console.log(x);
//     x++;
// }
// let x=1;
// do {
//     console.log("I can do it")
//     x++;
// } while (x<=10);


// Conditional Statement
// let day =Number(prompt("Enter day number"));
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//      case 2:
//         console.log("Monday");
//         break;
//      case 3:
//         console.log("Tuesday");
//         break;
//      case 4:
//         console.log("Wednesday");
//         break;
//      case 5:
//         console.log("Thursday");
//         break;

//     default:
//         console.log("Invalid Day")
//         break;
// }

// for(let i =0, j =10; i<=10; i++, j--){
//     console.log(i ,j);
// }

// const fruits =["apple", "mango", "banana"];
// const filteredArray = fruits.find((fruit)=>{
//     return fruit.includes("v");
// })

// console.log(filteredArray);
// for(fruit in fruits){
//     console.log(fruits[fruit]);
// }
// for (let i = 0; i<fruits.length; i++) {
//    console.log(fruits[i]); 
// }
// fruits.forEach((fruit) => {
//     console.log(fruit);
// });
// const splicedFruits =fruits.splice(0 ,0, "litchi", "cherry");
// console.log(fruits);

// const MappedFruits = fruits.find((fruit)=>{
//    return fruit.includes("o");
// }
// )
// console.log(MappedFruits);

// const num = [1,2,3,4,5];
// const sumof= num.reduce((acc, sum) =>{
//  result =acc + sum;
//  return result
// })
// console.log(sumof)