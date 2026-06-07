//Array

const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr); //output: [1, 2, 3, 4, 5, 6, 7]
// console.log(arr[2]); //output: 3
// console.log(typeof arr); //output: object



//Apply Methods

// arr.push(8)  //by default add at a last index
// arr.pop(8)  // by default remove at a last index

// arr.unshift(0); //by default add at a first index
// arr.shift();    //by default remove at a first index


// console.log(arr.includes(2));  //output: true  [ Note--> includes tells the value is present or not in  array]. 
// console.log(arr.indexOf(2)); 


const newArr = arr.join();

// console.log(newArr);  //output: 1,2,3,4,5,6,7
// console.log(typeof newArr);  //output: string


// ********************************************************************************************************************************************

//slice and splice

console.log("A ", arr);  //output: A  [ 1, 2, 3, 4, 5, 6, 7 ]

const arr1 = arr.slice(1, 3);
console.log(arr1);  //output: [ 2, 3 ]


console.log("B ", arr);  //output: B  [ 1, 2, 3, 4, 5, 6, 7 ]

const arr2 = arr.splice(1, 3)
console.log(arr2);   //output: [ 2, 3, 4  ]


console.log("C ", arr);  //output: C  [ 1, 5, 6, 7 ]
