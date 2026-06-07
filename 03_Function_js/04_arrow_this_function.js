const user = {
    username: "shivam",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);  //[Note--> the object before the dot (user) becomes the value of this. it means (this === user)]
        // console.log(this);

    }
}

// user.welcomeMessage();  // [Note--> JavaScript finds the welcomeMessage method inside the user object and executes it.]
// user.username = "SKY";
// user.welcomeMessage();



// console.log(this);  //ouitput: {}  [Notes--> my current contex is global]




// *****************************************************************************************************************************************************




// function sky(){
//     let usename = "shivam"
//     console.log(this);

// }

// sky();

//arrow function
const sky = () => {
    let usename = "shivam";
    console.log(this);

}

// sky(); 


// arrow function use with parantheses
// I Method
const addnum = (num1, num2) => {
    return num1 + num2;  // explicit return, it mean use return key word
}
// console.log(addnum(2, 5));  //output:  7


// II Method
const add_num = (num1, num2) => num1 + num2;  //implicit return

// console.log(add_num(2, 5));


// III Method
const add_Num = (num1, num2) => (num1 + num2);

// console.log(add_Num(2, 5));


const addtwo = (num1, num2) => ({ username: "shivam" })

// console.log(addtwo(2, 5));

