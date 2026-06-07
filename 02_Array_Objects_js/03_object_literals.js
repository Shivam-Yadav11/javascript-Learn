// objects literals


let mySym = Symbol("key1");

const user = {
    [mySym]: "mykey1",
    name: "shivam",
    "full name": "shivam kumar yadav",
    age: 18,
    email: "shivam400yadav@gmail.com",
    location: "Lucknow"
}

// console.log(user);
// console.log(user.email);  //here we only acess email using (user.email) 
// console.log(user.full name);  //error through
// console.log(user["full name"]);  


// console.log(typeof user[mySym]);



//changing

user.email = "sky@gmail.com";
// console.log(user);  //output: 'sky@gmail.com'

// Object.freeze(user);  // freeze (it mean we does not changes in user object after using freeze method)

user.email = "skyadav@gmail.com";
// console.log(user);



user.greet = function() {
    console.log("hello js user");
}
user.greet_one = function() {
    console.log(`hello ${this.name} js user`);
}

console.log(user.greet());
console.log(user.greet_one());
