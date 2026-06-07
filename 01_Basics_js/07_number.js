const score = 400;  //Here js automatic detects this is a number.
// console.log(score); // output: 400
// console.log(typeof score); // output: number


const isScore = new Number(400);  //Here we declear as a number.
// console.log(isScore); // output: [number: 400]
// console.log(typeof isScore); //output: object



//convert onto String using toString() method
const isValue = isScore.toString();
// console.log(isValue); //output: 400 as a string
// console.log(typeof isValue);  // output: string
// console.log(isValue.length);  //output: 3
// console.log(isScore.toFixed(2));  //output: 400.00

// const hundreds = 100000;
// console.log(hundreds.toLocaleString());  //output: 1,00,000





//********************************************************************************* */

// console.log(Math);
console.log(Math.abs(-400));  //output: 400 , [Note--> abs stands for absolute value, it convert negative value into positive vale.]

console.log(Math.random() * 10 + 10);

