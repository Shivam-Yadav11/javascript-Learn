let h1 = document.querySelector('h1')

// setTimeout( ()=>{
//  h1.style.color = 'green';
// },1000)
// setTimeout( ()=>{
//  h1.style.color = 'red';
// },2000)
//  setTimeout( ()=>{
//  h1.style.color = 'blue';
// },3000)
// setTimeout( ()=>{
//  h1.style.color = 'yellow';
// },4000)
// setTimeout( ()=>{
//  h1.style.color = 'orange';
// },5000)




//********************************************************************************************** */

// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1.style.color = color;
//     }, delay)
// }


// changeColor('orange', 1000)
// changeColor('blue', 2000)
// changeColor('yellow', 3000)
// changeColor('red', 4000)
// changeColor('green', 5000)




//********************************************************************************************** */

// function change_color(color, delay, nextcolor) {
//     setTimeout(() => {
//         h1.style.color = color;
//         nextcolor();
//     }, delay);
// }


// callbackHell
// change_color('orange', 1000, () => {
//     change_color('blue', 1000, () => {
//         change_color('yellow', 1000, () => {
//             change_color('red', 1000, () => {
//                 change_color('green', 1000)

//             })
//         })
//     })
// })




//********************************************************************************************** */

function changecolor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve()
        }, delay);
    })
}


// .then() and .catch()
changecolor('orange', 1000)
.then(() => {
    return changecolor('red', 1000)
})
.then(() => {
    return changecolor('yellow', 1000)
})
.then(() => {
    return changecolor('blue', 1000)
})
.then(() => {
    return changecolor('green', 1000)
})