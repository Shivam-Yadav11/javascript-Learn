// rest operator--> we write inside function name parantheses like this --> function_name(...any_name).

function calculateCartPrice(...num) {
    return num;
}

// console.log(calculateCartPrice(200, 300, 400, 600, 500));  //output: [ 200, 300, 400, 600, 500 ]


function calculate_CartPrice(val1, val2, ...num) {
    return num;
}

// console.log(calculate_CartPrice(200, 300, 400, 600, 500));  //output: [ 400, 600, 500 ]




//object in function

//create an Object
const user = {
    name: "shivam",
    rollno: 400
}


function handleobject(anyobject){
    // console.log(`username is ${anyobject.name} and roll number is ${anyobject.rollno}`);
    
}

// handleobject(user);  //function call
// handleobject({
//     name: "sky",
//     rollno: 400
// })



//Array in function

// create an Array
const array = [200, 400, 600, 800];

function return_value(getarray){
 console.log(getarray);  //output: [ 200, 400, 600, 800 ]
 
}

// return_value(array);  //function call
// return_value([100, 300, 500, 700])