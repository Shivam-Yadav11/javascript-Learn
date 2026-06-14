// // promises is a object

// const promisesOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Task 1 Completed");
//         resolve(); // Here we connect resolve to .then() 
//     }, 1000);
// })


// // [Note--> .then() is dircetly connected to resolve, and it take a call back]
// promisesOne.then((data) => {
//     console.log("promise consumed");
// })


// // ************************************************************************************************************************************************************************


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Task 2 was Completed');
//         resolve();
//     }, 1000)
// }).then(function () {
//     console.log('again your promised was consumed');

// })


// // ************************************************************************************************************************************************************************

// const promisesThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({ userName: 'SKY_11', Email: 'sky@11gimail.com' })
//     }, 1000)
// })

// promisesThree.then(function (user) {
//     console.log(user);
// })


// // ************************************************************************************************************************************************************************

// const promisfour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let user = false;
//         if (!user) {
//             resolve({ userName: 'sky_11', Email: 'sky@11gmail.com' })
//         } else {
//             reject("Error: Somthing went wrong.")
//         }

//     }, 1000)
// })
// promisfour
//     .then((data) => {
//         // console.log(user);
//         console.log(`UserName: ${data.userName}`);
//         return data;
//     })
//     .then((data) => {
//         console.log(`Email: ${data.Email}`);

//     })

//     // here we use a .catch(), .catch() catch the error. 
//     .catch((Error) => {
//         console.log(Error);
//     })




// // ************************************************************************************************************************************************************************


// const promisefive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let user = false;
//         if (!user) {
//             resolve({ userName: 'javascript', Password: '123' })
//         } else {
//             reject("Error: Somthing went wrong.")
//         }
//     }, 1000)
// })


// async function consumeddata() {
//     try {
//         const consumed = await promisefive;
//         console.log(consumed);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumeddata();
