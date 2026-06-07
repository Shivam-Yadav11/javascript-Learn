console.log("var variables output Here");
//var is a global variable Scope

var a = 10;
// var a = 5; //Allow

{
    var a = 11;
    console.log(a);  //output = 11
}

console.log(a);  //output = 11

// ======================================================================================================


console.log("let variables output Here");
//let is a block variable Scope

let b = 10;
b = 5; //Allow
// let b = 5; // error through , 'b' has already been declared
 {
    let b = 11;
    console.log(b); //output = 11

    let b1 = 110;
    console.log(b1); //output = 110
 }

 console.log(b); //output = 10 ya 5 (according to declearation)
//  console.log(b1); //error through beacuse  b1 is not defined

// =======================================================================================================



console.log("const variables output Here");
//const is a global or block  both variable Scope

const c = 11;
// c = 5;  // error through,  Assignment to constant variable (it means cant not re-assign new variable value)
// const c = 5; // error through , 'c' has already been declared
{
    const c = 110;
    console.log(c); //output = 110

    const c1 = 112;
    console.log(c1); //output = 112
    
}

console.log(c); //output = 11
// console.log(c1); // error through ,  c1 is not defined




 