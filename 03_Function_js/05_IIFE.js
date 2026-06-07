// IIFE --> Immediate Invoked Function Expression

// it use for immediate excution as well as to protect/remove  global variable polution

//named IIFE
(function sky() {
    console.log("shivam");
})();  //[ Note-> you can remove semicolon , then observe what output get ]



(() => {
    console.log("shivam");
})();



//pass paramete in IIFE 
((name) => {
    console.log(`Hi! ${name}` );
})("shivam");