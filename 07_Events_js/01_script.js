//type, timestamp, desfaultPrevented
// target, toElement, scrElement, currentTarget
// clientX, clientY, screenX, screenY


// Event Capturing
const box = document.getElementById('boxs')
box.addEventListener('click', function (e) {
    // console.log("clicked inside ul");   
}, true) // event capturing [flow outer to inner]


const boxs = document.getElementById('box3')
boxs.addEventListener('click', function (e) {
    // console.log("clicked inside box 3");  
}, true)


// Event Bubbling
const box1 = document.getElementById('boxs')
box.addEventListener('click', function (e) {
    // console.log("clicked inside ul");   
}, false) // event bubbling [flow inner to outer]


const boxs1 = document.getElementById('box3')
boxs.addEventListener('click', function (e) {
    // console.log("clicked inside box 3");  
    // e.stopPropagation();  // use for stop bubbling event
}, false)


// *************************************************************************************************************************************************


// stop prevention 
document.getElementById('google').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log("clicked google");
})



// ****************************************************************************************************************************************************8


// for practices
document.querySelector('#boxs').addEventListener('click', function (e) {
    // console.log(e.target.tagName);

    if (e.target.tagName === 'LI') {
        let removeIt = e.target;
        removeIt.remove();
        // removeIt.parentNode.removeChild(removeIt)
    }
}, false)

