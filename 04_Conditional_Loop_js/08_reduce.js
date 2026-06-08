//reduce
const mynum = [1, 2, 3, 4, 5]

const num = mynum.reduce(function (acc, curval) {
    // console.log(`acc: ${acc} and curval:${curval}`);
    // return acc + curval;
}, 0)

// console.log(num);


const mytotal = mynum.reduce((acc, curval) => acc + curval, 0)
// console.log(my total);



//Example

const course = [
    {
        courseName: "js course",
        price: 999
    },

    {
        courseName: "Mobile dev course",
        price: 12999
    },

    {
        courseName: "Data science course",
        price: 1800
    },

    {
        courseName: "DSA course",
        price: 1200
    },

    {
        courseName: "C++ course",
        price: 1000
    }
]


const totalprice = course.reduce((acc, item) => acc + item.price, 0)
// console.log(`Total Amount: ${totalprice}`);



