 const name = "shivam kr yadav" // this is an old method
 
 const isName = "shivam kr yadav";
 console.log(`My Name is ${isName}.`); // we use this method instead of above 
 



const gameNumber = new String('shivam');
// console.log(gameNumber);
// console.log(gameNumber[0]);
// console.log(gameNumber[1]);
// console.log(gameNumber[2]);

// console.log(typeof gameNumber);  //output: object
// console.log(gameNumber.__proto__);  //output: {}



// Method of String

console.log(gameNumber.toUpperCase()); //output: SHIVAM
console.log(gameNumber.indexOf('s'));  //output: 0
console.log(gameNumber.charAt(2));     // output: i
console.log(gameNumber.substring(1,4)); //output: shiv , [ Notes--> In substring last index number is not count ,  substring count [0 , n-1]  ]
console.log(gameNumber.slice(-4, 7));

console.log(gameNumber.replace('shivam', "SKY")); //output: sky
console.log(gameNumber.includes('shivam')); //output: true
console.log(gameNumber.includes('yadav'));  //output: false


