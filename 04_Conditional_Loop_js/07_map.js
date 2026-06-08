// map

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mynum = num.map((item) => item + 10);
// console.log(mynum);




//map chaining
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const num1 = nums.map((items)=>items*10)
const num2 = nums.map((items)=>items*10).map((items)=>items+1)
const num3 = nums.map((items)=>items*10).map((items)=>items+1).filter((items)=>items>=40);
console.log(num1);
console.log(num2);
console.log(num3);
