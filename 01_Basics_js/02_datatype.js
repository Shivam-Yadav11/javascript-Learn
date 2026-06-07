//primitive data type ->  call by value {Boolean, Number, String, Null, Undefined, Symbole, BigInt}


// Non primtive (Refrence) -> call by Refrence { Array, Object, Function}


    
// undefined  ex:->  let name;
//  null      ex:->  let name = null;
// number     ex:->  let num = 10;
//  string    ex:->  let name = "shivam";
//  symbole   use for uniqueness
//  boolean   ex:->  let isId = true/false;
//  bigint    use for large number


let name1;
let str = null;
let num = 10;
let name2 = "shivam";
let isId = true;
let id = Symbol('123');
let bigNum = 202310101110232010101110400n

console.table([name1, str, num, name2, isId, id, bigNum]) 
console.table([typeof name1, typeof str, typeof num, typeof name2, typeof isId, typeof id, typeof bigNum])  //check typeof of data type
console.log(typeof null);  //output 'object'
console.log(typeof undefined); //output 'undefined'
