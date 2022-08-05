//Given a number write a function to find if it is divisible by 5

var num = 5;

function isDivisibleBy5(input){
    if(input % num == 0){
        console.log(" Yes, divisible");
    }
    else{
        console.log("Not");
    }
}

isDivisibleBy5(50);