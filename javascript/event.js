//DOM Manipulation
// const btn = document.createElement("button");
// const container = document.getElementById("container");
// const body = document.body;
// btn.textContent = "Click Me";
// body.appendChild(btn);

// container.innerHTML = `<div> Click Me </div>`;

// function counting(){
//     let count =0;

// function increment(){
//     count++;
//     console.log(count);
// }
// return increment;
// }
// const counter = counting();
// counter();

// function User(name,age){
//     this.name =name;
//     this.age =age;
// }
// User.prototype.greet = function(){
//     console.log(`${this.name} is ${this.age} years old`);
// }
// const user1 = new User("John", 25);

// function user(name, age){
//     console.log(`${this.name} is ${this.age} years old`);
// }
// const User = {
//     name: "Mohit",
//     age: 24
// }
// user.call(User)

// function greet(greeting, age, hobby){
//     console.log(greeting+','+ this.name +" "+ "is" +" "+age+" years old" +" and loves " +hobby.join(','));
// }
// const mohit = {name:'Mohit'};
// greet.apply(mohit, ['Hello', 24, ['football','coding']]);


// function greet(greeting, age, hobby){
//     console.log(greeting+','+ this.name +" "+ "is" +" "+age+" years old" +" and loves " +hobby.join(' and '));
// }
// const mohit = {name:'Mohit'};
// const Hello = greet.bind(mohit, 'Hello',24,['playing','reading']);
// Hello();

// const user ={
//     name: "Mohit",
//     age: 24,
//     isStudent: true,

//     greet: function(){
//         setTimeout(() => {
//             console.log(`Hello ${this.name}`);
//         });
//     }
// }
// user.greet();

// name="MOHIT"
// const user ={
//     name: "Mohit",
//     age: 24,
//     isStudent: true,

//     greet:()=>{
//        console.log(this.name)
//     }
// }
// user.greet();

// function User(){
// this.name = "Mohit";
// this.age = 24;
// this.isStudent = false;
// }
// User.prototype.greet = function(){
//     console.log(`Hello ${this.name}`);
// }
// const user1 = new User();
// user1.greet();

// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello ${this.name} is ${this.age} years old`);
//     }
// }
// const student = new Student("Mohit", 24);
// student.greet();
// const student2 = new Student("Ram", 25);
// student2.greet();

// class Animal {
//     constructor(name, age){
//         this.name =name;
//         this.age =age;
//     }
//     details(){
//         console.log(`I am ${this.name} and I am ${this.age} years onld`);
//     }
// }
// class Dog extends Animal {
//     constructor(name, age){
//         super(name,age);
//     }
//     bark(){
//         console.log("Bhau bhau");
//     }
// }
// class Cat extends Animal{
//     constructor(name, age){
//         super(name,age);
//     }
//     meow(){
//         console.log("Miyauuuuu");
//     }
// }
// const dog= new Dog("Hunter", 4);
// const cat= new Cat("Billu", 1);
// dog.details()
// dog.bark()
// cat.details()
// cat.meow()

// class Car {
//     constructor(name, lot){
//         this.name= name;
//         this.lot = lot;
//     }
//     details(){
//         console.log(`This car is ${this.name} and its lot number is ${this.lot}`);
//     }
// }
// class Sedan extends Car {
//     constructor(name, lot){
//         super(name, lot);
//     }
//     sedan(){
//         console.log("Family comfort car");
//     }
// }
// class Offroad extends Car{
//     constructor(name, lot){
//         super(name, lot);
//     }
//     offroad(){
//         console.log("Vehicle for high terrains");
//     }
// }
// const sedan= new Sedan("Suzuki WagonR", 34);
// const offroad= new Offroad("Ford Raptor", 49);
// sedan.details();
// sedan.sedan();
// offroad.details();
// offroad.offroad();

// class Mathutils{
//     static name ="Mohit"
// }
// console.log(Mathutils.name);

// class Account{
//     #balance = 0
//     constructor(name,balance){
//         this.name= name;
//         this.#balance = balance;
//     }
//     deposit(balance){
//         this.#balance +=balance
//     }
//     withdraw(balance){
//         this.#balance -=balance
//     }
//     set balance(balance){
//         this.#balance =balance
//     }
//     get balance (){
//         return this.#balance
//     }

// }
// const acc = new Account("Mohit",1000)
// acc.deposit(5000)
// console.log(acc.balance)


//Promise

// const p = new Promise ((resolve, reject)=>{
//     const status =true;
//     if(status){
//         resolve("Status sucess")
//     }
//     else{
//         reject("Status failed")
//     }
// })
// p.then(result => console.log(result)).catch(error => console.log(error));
