//scope types function ,block , global,script && // shadowing
// debugger;

// console.log(a);  // undefined
// console.log(ab);  // reference error ab is access before initialization temp dead lock
// console.log(b);   // reference error b is not defined as for now it we dont have any
// var a = 10;
// let ab = 2;
//block scope
// {
//   var a = 20; // global scope so gets over written overwrites global scope a
//   let ab = 5; // block scope so creates block scope and initializes there
//   // var ab = 5; Uncaught SyntaxError: Identifier 'ab' has already been declared (at node.js:12:7)s
//   console.log(a);
//   console.log(ab);
// }
// ###
//function scope  with local in scope
// function ab() { Uncaught SyntaxError: Identifier 'ab' has already been declared (at node.js:12:7)s
//   console.log("ab");
// }
// function a() {  // function gets over written by a=10 which is dangerous so please use let
//   console.log("ab");
// }
// function FunctionScope() {
//   var ab = 30; // guess works fine let can be shadowed by var in function since it stays with the function which has its own local scope
//   var a = 50; // stays with the function
//   console.log(a);
//   console.log(ab);
// }
// FunctionScope();
//scope in closures  gets created in Closure (FunctionScope)
// function FunctionScope() {
//   let ab = 30; // guess works fine let can be shadowed by var in function since it stays with the function which has its own local scope
//   var a = 50; // stays with the function
//   const c = 90;
//   function closured() {
//     var ab = 100;
//     let a = 30;
//     const c = 60; // if c is not available in closured function then it will bne stored in Closure (FunctionScope) else it will create its own local scope and have this and its own local variables
//     console.log(a); //30
//     console.log(ab); //100
//     console.log(c);//60
//   }
//   closured();
//   console.log(a); //50
//   console.log(ab);//30
// }
// FunctionScope();
// console.log(a);
// console.log(ab);

//#######################promises && async await#######################

// {
// const p1 = new Promise((res, rej) => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((result) => {
//       res(result.json());
//     })
//     .catch((err) => {
//       rej(err);
//     });
// });
// // console.log();
// p1.then((res) => console.log(res));
// Yes, you are absolutely right! Let's break it down clearly:

// 1️⃣ When Using Promises (.then())
// When we use .then(), both fetch calls execute in parallel (almost at the same time), because fetch is non-blocking. The JavaScript engine moves on immediately after calling fetch, without waiting for the previous one to complete.

// javascript
// Copy
// Edit
// function fetchData() {
//   let promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log('First Fetch:', data));

//   let promise2 = fetch('https://jsonplaceholder.typicode.com/todos/2')
//     .then(response => response.json())
//     .then(data => console.log('Second Fetch:', data));

//   console.log('Both fetches started!'); // This will log before fetch completes
// }

// fetchData();
// 👉 Execution Flow:

// Both fetch calls are made simultaneously.
// While waiting for network responses, JavaScript continues execution.
// Responses are processed asynchronously when they arrive.
// 2️⃣ When Using async/await
// If we use async/await without Promise.all(), the second fetch will wait for the first one to complete before starting.

// javascript
// Copy
// Edit
// async function fetchData() {
//   console.log('Starting first fetch...');
//   let response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   let data1 = await response1.json();
//   console.log('First Fetch:', data1);

//   console.log('Starting second fetch...');
//   let response2 = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//   let data2 = await response2.json();
//   console.log('Second Fetch:', data2);
// }

// fetchData();
// 👉 Execution Flow:

// fetch('.../todos/1') starts.
// JavaScript waits (blocking further execution) until the first request is completed.
// Only after await resolves, the second fetch starts.
// The second request is made and awaited.
// 3️⃣ Making async/await Run in Parallel (Promise.all)
// To execute both fetch requests in parallel using async/await, we use Promise.all():

// javascript
// Copy
// Edit
// async function fetchData() {
//   console.log('Fetching both in parallel...');

//   let [response1, response2] = await Promise.all([
//     fetch('https://jsonplaceholder.typicode.com/todos/1'),
//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//   ]);

//   let data1 = await response1.json();
//   let data2 = await response2.json();

//   console.log('First Fetch:', data1);
//   console.log('Second Fetch:', data2);
// }

// fetchData();
// 👉 Execution Flow:

// Both fetch calls start at the same time.
// JavaScript waits for both to finish before moving forward.
// After both are done, it processes results together.
// 🔹 Key Differences
// Feature	.then() (Promise)	async/await (Sequential)	async/await + Promise.all() (Parallel)
// Execution	Parallel	Sequential	Parallel
// Performance	Faster	Slower (due to waiting)	Fastest (both run together)
// Readability	Harder to read	More readable	Readable & efficient
// ✅ Conclusion
// .then() → Runs fetch calls in parallel (non-blocking).
// async/await → Runs fetch calls sequentially (blocking).
// async/await + Promise.all() → Runs fetch calls in parallel, maintaining readability. 🚀
// Let me know if you need any clarifications! 🎯
// }

//#######################call apply bind#######################

// {
// const student = {
//   name: "bhaskara",
// };
// function printFuntion(from, age) {
//   console.log("name is", this.name, "from", from, "age", age);
// }
// const student2 = {
//   name: "Durga",
// };
// //function borowing
// //bind invokes later rather than invoking it like call
// printFuntion.call(student, "from", "age"); //extra agrs passed as comma seperated for call
// printFuntion.call(student2, "from", "age");
// printFuntion.apply(student, ["from", "age"]); //extra agrs passed as single array  seperated for apply
// printFuntion.apply(student2, ["from", "age"]);
// //bind binds function to the obj and return function with the binded one
// let student3 = printFuntion.bind(student2, "from bind", "age");
// student3();
// }

//#######################polyfill for bind######################

// const student = {
//   name: "bhaskara",
// };
// function printFuntion(from, age) {
//   console.log("name is", this.name, "from", from, "age", age);
// }
// Function.prototype.myBind = function (...args) {
//   let obj = this;
//   let arg = args[0];
//   let argsAfter = args.slice(1);
//   return function (...params) {
//     obj.apply(arg, [...argsAfter, ...params]);
//   };
// };

// let myOwnPolyFill = printFuntion.myBind(student);
// myOwnPolyFill("Achanta Vemavaram", 24); //because of args we added before it works

//#######################Curying######################

// With bind(), you can partially apply arguments but still have flexibility.
// With closures, you must pass arguments step by step.
// function curry(first, second) {
//   console.log(first, second);
// }
// let b = curry.bind(this, "first");
// b("second");
// let c = curry.bind(this);
// c("bhas", "durga");

// funcction prototyping

//#######################debouncing ,throtling######################

// for throtling we can do is to make the api call restricted  using some flag and have a set timeout
//until then the flg will be false when it was true then it will run api call again try to use apply to the expensive functions i would be btter
//debouncing is like when we do certain task and make some pause then have a api call expamples:
// flipkart search amazon search , page load on scroll
//debouncing.....
let count = 0;
let limit = 3000;
let timer = 0;
let flag = true;
function ApiCall() {
  console.log("fetching data ", count++);
}

const Debouncing = function () {
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      ApiCall();
    }, limit);
  };
};

const Throtling = function () {
  return function () {
    if (flag) {
      ApiCall();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};
//#######################bubling ,capturing (trickle can be called)######################

// const grandparent = document.querySelector("#grandparent");
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// grandparent.addEventListener(
//   "click",
//   () => {
//     // e.stopPropagation()  // useful to stop propagation to handle events
//     console.log("Grand Parent");
//   },

//   false //bubbling by default or if we make this usecapture argument as false else if true it is capturing
// );

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent");
//   },
//   // e.stopPropagation()  // useful to stop propagation to handle events

//   false //bubbling by default or if we make this usecapture argument as false else if true it is capturing
// );

// child.addEventListener(
//   "click",
//   (e) => {
//     console.log("child");
//     // e.stopPropagation()  // useful to stop propagation to handle events
//   },

//   false //bubbling by default or if we make this usecapture argument as false else if true it is capturing
// );

//#######################event deligation (helps to handle events)######################

//more likey becoz of event bubbling just optimizing the code instead of handing each items with their event handler add it to parent and
//use event bubling theory to get things
//instead of multiple event handlers like above we use to handle using one in parent
// document.querySelector("#Category").addEventListener("click", (e) => {
//   console.log("What was the item", e?.target?.innerHTML);
//   console.log(e);
// });
