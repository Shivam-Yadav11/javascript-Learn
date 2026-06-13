
// setTimeout()
// const sayHello = function(){
//    let h2 = document.querySelector('h2')
//    h2.innerHTML = "Shivam Kumar Yadav"
// }
// let changeMe = setTimeout(sayHello,2000);


// clearTimeout
// const btn = document.querySelector('button')
// btn.addEventListener('click', function(){
//     clearTimeout(changeMe);
//     console.log("Stop");

// })






// **************************************************************************************************************************

// setInterval()
// const sayHey = function () {
//     console.log("Hi");
// }


// const btn = document.querySelector('#start')
// let bbtn;
// btn.addEventListener('click', function () {
//      bbtn = setInterval(sayHey, 1000)
// })

// clearInterval
// const btns = document.querySelector('#stop')
// btns.addEventListener('click', function () {
//     clearInterval(bbtn)    
// })



// ****************************************

// Background Automatic Color Changing 
 
// create a random color 
const randomColor = function () {
    let hex = "0123456789ABCDEF"
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
console.log(randomColor());


let colorChange = function () {
    let color = document.querySelector('body').style.backgroundColor = randomColor();
}

let colorFlex;
const btn = document.querySelector("#start")
btn.addEventListener('click', function (e) {
    if(!colorFlex){
        colorFlex = setInterval(colorChange, 1000)
    }
        
})


const btns = document.querySelector("#stop")
btns.addEventListener('click', function (e) {
    clearInterval(colorFlex)
   colorFlex = null;
})



