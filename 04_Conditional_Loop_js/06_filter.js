// const coding = ["javascript", "reactjs", "Next.js", "Typescript"]

// const mycode = coding.forEach( (item)=>{
//     console.log(item);
//     return item;
// })

// console.log(mycode);  //output: undefined



//filter
const mynum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const nums = mynum.filter((item) => item > 5)
// console.log(nums);



const my_nums = mynum.filter((items) => {
    items > 5
})

// console.log(my_nums);  //output: []  (resason-> you define scope and can not use retrun key)



// const mynums = mynum.filter((items) => {
//     return items > 5
// })

// console.log(mynums);  //output: [ 6, 7, 8, 9, 10 ] (reason-> use return key)



const mynum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const num1 = [];
mynum1.forEach((item) => {
    if (item > 5) {
        num1.push(item)
    }
})

// console.log(num1);


// **************************************************************************************************************************************

//only coceptual knowledege

const Books = [
    { title: 'Book one', name: 'java', genere: 'codingBook' },
    { title: 'Book two', name: 'ComputerNetwork', genere: 'TheoryBook' },
    { title: 'Book three', name: 'CompilerDesign', genere: 'TheoryBook' },
    { title: 'Book four', name: 'javascript', genere: 'codingBook' },
    { title: 'Book five', name: 'DSA', genere: 'PracticeBook' }
]


// let Book = Books.filter( (item) => item.genere === 'codingBook')
Book = Books.filter((item) =>{
    return item.genere === 'codingBook' || item.genere === 'TheoryBook'
})
console.log(Book);
