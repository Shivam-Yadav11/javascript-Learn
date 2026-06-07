//Dates


const isDate = new Date();

// console.log(isDate);
// console.log(isDate.toString());
// console.log(isDate.toLocaleString());
// console.log(isDate.toDateString());


// let myDate = new Date(2026, 6, 2);
let myDate = new Date("2026-7-2");
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());



//Timestamp


let myTimeStamp = Date.now();
console.log(myTimeStamp);
// console.log(myDate.getTime());

console.log(Math.floor(myTimeStamp/1000));  //get output in milli-seconds.
