//scope

function one() {
    const username = "shivam";

    function two() {
        const webiste = "shivam.com";
        // console.log(username);
    }

    // console.log(webiste);  // error through, webiste is not defined.
    // two();
}

// one();





// ****************************************************************************************************************************

if(true){
    const userName = "shivam";

    if(userName === "shivam"){
        const websitename = "shivam.com"
        // console.log(userName +" "+ websitename);
    }

    // console.log(websitename);  // error through, websitename is not defined
}

// console.log(userName);  //output: error through, userName is not defined




// *********************************************************************************************************************************


// console.log(addone(5));  //output: 5

function addone(num){
    return num;
}



// console.log(addTwo(5));  //output: Cannot access 'addTwo' before initialization

const addTwo =  function(num1){
    return num1;
}


 