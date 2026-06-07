// for loop working steps

// step 1 - initialization: [let i = 0]
// step 2 - condition check: [i <= 10]
// step 3 - {} [if condition true, then excute inside curly brackets statements]
// step 4 - increment: [i++]

for (let i = 0; i <= 10; i++) {
    const element = i;
    //     console.log(element);
}


// **********************************************************************************************************


for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        // console.log("5 number is print");
    }
    //     console.log(i);
}


// **********************************************************************************************************

// Nested for loop --> [Loop inside Loop]

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //    console.log(`Inner loops value: ${j} and outer loop value: ${i}`);
    }
}



// **********************************************************************************************************

const array = ["shivam", "kumar", "yadav"]
// console.log(array.length);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}



// **********************************************************************************************************

// break and continue;

//break 
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log("5 is detected");
        break;  // terminated whole statements after writen break condition
    }
    //    console.log(`value of i: ${i}`);   
}


//continue
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log("5 is detected");
        continue;   // skip only detected condition
    }
    // console.log(`value of i: ${i}`);
}





// **********************************************************************************************************


//while and do while loop

//while loop

let i = 0;
while (i <= 10) {
    // console.log(`value of i: ${i}`);
    i = i + 2;
}


let myarr = ["shivam", "kumar", "yadav"];
let arr = 0;
while (arr < myarr.length) {
    // console.log(arr, myarr[arr]);
    arr = arr + 1;
}

// **********************************************************************************************************


//do while loop --> [In do while loop first excute your code then after your condition check, it means one time your code will be excute]

let score = 1;
do {
    // console.log(`value of score: ${score}`);
    score++;
} while (score <= 10);
