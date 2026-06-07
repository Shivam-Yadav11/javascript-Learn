const marvel_heros = ["thor", "ironman", "spiderman"];


const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);  // Note--> push operation excute/retun on existing array]
// console.log(marvel_heros);   // output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const  new_heros = marvel_heros.concat(dc_heros)   // [Note--> concat operation excute/return a new array]
// console.log(new_heros);    // output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//speard
const new_all_heros = [...marvel_heros, ...dc_heros]
// console.log(new_all_heros);  // output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const another_arr = [1, 2, 3, [4, 5, 6], 6, 7, [8, 9, [10, 11]]]

// console.log(another_arr.flat(Infinity));  //output:  [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10, 11]


// console.log(Array.isArray("shivam"));  // we ask, shivam is an array. //output: false

// console.log(Array.from("shivam"));  // here shivam convert into array like this -> //output: [ 's', 'h', 'i', 'v', 'a', 'm' ]
// console.log(Array.from({ name: "shivam" }));  //output: []


let score1 = "shivam";
let score2 = "kumar";
let score3 = "yadav";
let score4 = 100;
let score5 = 200;
let score6 = 300;

console.log(Array.of(score1, score2, score3, score4, score5, score6));  //output:  [ 'shivam', 'kumar', 'yadav', 100, 200, 300 ] 