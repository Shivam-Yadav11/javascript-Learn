// for of loop

let array = [1, 2, 3, 4, 5, 6, 7];
for (const arr of array) {
    // console.log(arr);
}


const greeting = "Hello! shivam";
for (const greet of greeting) {
    // console.log(greet);
}



//Maps
//Notes--> Map follow order (jis order may value dogey usi order may vaule print kare ga )
// Map use unique key value, repeated value only print one's

const map = new Map();

map.set('In', 'India')
map.set('Lko', 'Lucknow')
map.set('Rkt', 'Renukoot')
map.set('In', 'India')
// console.log(map);


for (const key of map) {
    // console.log(key); 
}

//if you want to print individual key , value
for (const [key, value] of map) {
    // console.log(key,"->", value);    
}





// *************************************************************************************************************



//object
// const myobject = {
//     "game1": "GTA",
//     "game1": "BGMI"
// }

// for (const [key] of myobject) {
//     console.log(key);  //output: error through-> myobject is not iterable  
// }


//for in loop

const my_object = {
    'js': 'javascript',
    'CPP': 'C++',
    'py': 'python',
    'DS': 'Data Structuer'
}

for (const key in my_object) {
    //    console.log(key);  
}

for (const key in my_object) {
    //    console.log(my_object[key]);  
}



//Array
const languages = ["java", "javascript", "rect", "node.js", "Next.js"]
for (const key in languages) {
    //    console.log(languages[key]);
}


const maps = new Map();

maps.set('In', 'India')
maps.set('Lko', 'Lucknow')
maps.set('Rkt', 'Renukoot')
maps.set('In', 'India')

for (const key in maps) {
    // console.log(key);
    // console.log(maps[key]);
}




// *************************************************************************************************************


//for each loop

const coding = ["javascript", "reactjs", "Next.js", "Typescript"]

// I Method
// coding.forEach(function (item) {
//     console.log(item);
// })


// II Method
// coding.forEach((key) => {
//     // console.log(key);
// })



// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme);


coding.forEach( (item, index, arr)=>{
    // console.log(item, index, arr);
})


const mycoding = [
    {
        languageName: "javascript",
        languagefile: "js"
    },
    {
        languageName: "Express.js",
        languagefile: "Node.js"
    }
]

mycoding.forEach( (item)=>{
    // console.log(item.languageName);
    // console.log(item.languagefile);
})