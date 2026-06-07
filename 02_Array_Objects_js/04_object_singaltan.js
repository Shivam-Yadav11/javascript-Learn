//singaltan object

const user = new Object();
// console.log(user);


user.name = "shivam";
user.id = "123abc";
// console.log(user);


//nested object

const regular_user = {
    id: "123abc",
    fullname: {
        username: {
            firstname: "shivam",
            lastname: "yadav"
        }
    }
}

// console.log(regular_user);
// console.log(regular_user.fullname);
// console.log(regular_user.fullname.username);
// console.log(regular_user.fullname.username.firstname);





const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "f", 6: "e" }

const obj = { obj1, obj2 }
// console.log(obj);

const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);
const obj4a = Object.assign({}, obj1, obj2);
// console.log(obj4a);

const obj5 = Object.assign(obj1, obj2, obj3);
// console.log(obj5);
const obj5a = Object.assign({}, obj1, obj2, obj3);
// console.log(obj5a);


const obj6 = { ...obj1, ...obj2, ...obj3 }
// console.log(obj6);


const arr_user = [
    {
        id: "12345",
        email: "ydv@gmail.com"
    },

    {
        id: "12345",
        email: "ydv@gmail.com"
    },

    {
        id: "12345",
        email: "ydv@gmail.com"
    }
]

// console.log(arr_user);
// console.log(arr_user[1].email);


// console.log(user);
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty("name"));  //hasOwnProperty ye batata hai ki jo bhi hum vaule deyge wo usme hai ki nai



//destructure

const course = {
    courseName: "js",
    price: "99",
    courseInstructor: "sky"
}


const { courseInstructor: name } = course;
console.log(name);
f