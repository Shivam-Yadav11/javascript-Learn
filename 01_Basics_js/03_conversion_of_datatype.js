let score = 400;

// console.log(score); //output: 400 as a number
// console.log(typeof score);  //output: number
// console.log(typeof(score));


let isScore = "400";

// console.log(isScore);  //output: 400 as a string
// console.log(typeof isScore); //output: string

//convert into isScore as number

let  isScore1 = Number(isScore); // covert string 400 into Number 400
// console.log(isScore1); //output: 400 as a number
// console.log(typeof isScore1); //output: number


let marks = Number("99a");

// console.log(marks);  //output: NaN
// console.log(typeof marks);  //output: Number


//Here we print all variables and its typeof variable in single line of code used by console.table
// console.table([score, typeof score, isScore, typeof isScore, isScore1, typeof isScore1, marks,  typeof marks])


let age = null;

// console.log(age); //output: null
// console.log(typeof age);  //output: object

//conversion
 let isAge = Number(age);
//  console.log(isAge);  //output: 0 as a number
//  console.log(typeof isAge);  //output: number

 let id = undefined;

//  console.log(id);  //output: undefined
//  console.log(typeof id);  //output: undefined

 //conversion 
  let isId = Number(id);

//   console.log(isId); //output: NaN
//   console.log(typeof isId);  //output: number
  

let ans = true;

// console.log(ans); //output: true
// console.log(typeof ans);  //output: boolean

//conversion
let isAns = Number(true);

// console.log(isAns); //output: true
// console.log(typeof isAns);  //output: boolean

 
//  console.table([age, typeof age, isAge, typeof isAge, id, typeof id, isId, typeof isId, ans, typeof ans, isAns, typeof isAns]);



let logedIn = 1;

// console.log(logedIn);  //outptu: 1 as a number
// console.log(typeof logedIn);  //outptu: number 


let isLogedIn = Boolean(logedIn);

// console.log(isLogedIn);/  //outptu: true
// console.log(typeof isLogedIn);  //outptu: boolean 


let LogedIn = 1;
let LogedIn1 = 0;
let LogedIn2 = "";
let LogedIn3 = "shivam";

let isLogedin = Boolean(LogedIn);
let isLogedin1 = Boolean(LogedIn1);
let isLogedin2 = Boolean(LogedIn2);
let isLogedin3 = Boolean(LogedIn3);

// console.log(isLogedin);  //output: false
// console.log(typeof isLogedin);  //output: boolean

console.table([isLogedin, typeof isLogedin, isLogedin1, typeof isLogedin1, isLogedin2, typeof isLogedin2, isLogedin3, typeof isLogedin3 ])


