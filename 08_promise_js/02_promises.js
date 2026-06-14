// function saveDB(data, success, failure) {
//     let speed = Math.floor(Math.random() * 10 + 1)
//     if (speed >= 5) {
//         success();
//     } else {
//         failure();
//     }
//     console.log(speed);


// }


// saveDB('sky', () => {
//     console.log("your data was saved");
//     saveDB("skyadav", () => {
//         console.log("your data2 was saved");
//         saveDB("sy", () => {
//             console.log("your data3 was saved");
//         }, () => {
//             console.log("your data3 was  not saved");
//         })

//     }, () => {
//         console.log("your data2 was not saved");
//     })
// }, () => {
//     console.log("your data was not saved");

// })





// promises --> object

// resolve & reject

function save_DB(data) {
    return new Promise((resolve, reject) => {
        let speed = Math.floor(Math.random() * 10 + 1)
        if (speed > 5) {
            resolve("your data was saved");
        } else {
            reject("your data was not saved");
        }
    });
}


// .then() and .catch()
let req = save_DB("sky");
req.then((result) => {
    console.log(result);

    console.log("promise was success");
    return save_DB("hello world")
})
    .then((result) => {
        console.log(result); 
        console.log("data 2 was saved");
    })
    .catch((error) => {
        console.log(error);

        console.log("promise was rejected");
    })