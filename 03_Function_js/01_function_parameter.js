//function --> it use for excute same code multiple times.

//if you want to print you name 5 times , you can use function

function sayName() {
    //    console.log("Hi! Shivam");
}

// sayName   // [Note--> if you write only function name like this--> sayName (it mean you give me only fuction refrence)]
// sayName()    // [Note--> but you want to excute function , then you can write function name with parantheses like this --> sayNmae()]
// sayName()
// sayName()
// sayName()
// sayName()


// ******************************************************************************************************************************************************


// function parameters and Arguments

function sumNumber(a, b) { // SumNumber(a,b) --> Here inside parantheses a, b are parameters
    //     console.log(a + b); // output: 5
}

// sumNumber(2, 3);  //Here inside parantheses 2, 3 are Arguments



// **********************************************************************************************************************************************************



function sum_Number(a, b) {
    //     console.log(a + b); // output: 10
}
// const result = sum_Number(5, 5);
// console.log(result);  //output: undefined [Reason--> in result variable can not hold return value]




function sum_number(a, b) {
    //     return(a + b);  
}
// const result = sum_number(5, 5);
// console.log(result);  //output: 10 [Reason--> in result variable can hold return value]




function sum__Number(a, b) {

    return (a + b);   // function instantly terminate

    // console.log("Hi! Shivam");  //[Note--> not excute, Because Any lines written below a return statement inside the same block are ignored, it calls Dead Code]

}
const result = sum__Number(5, 5);
// console.log(result);  //output: 10 [Reason--> in result variable can hold return value]




function userLoggedIn(username) {
    return `${username} just Logeed In`
}

// console.log(userLoggedIn("shivam"));   //output: Shivam just Logeed In
// console.log(userLoggedIn(""));   //output: just Logeed In
// console.log(userLoggedIn());   //output: undefined just Logeed In



function user_LoggedIn(username) {
    if (!username) {
        console.log("Please enter your name");
        return;
    }
    return `${username} just Logeed In`
}

console.log(user_LoggedIn()); //output: undefined
