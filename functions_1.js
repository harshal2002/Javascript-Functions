//Write a function to find an even number, if a number is even, return true

function isEven(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

var input = isEven(4);
console.log(input);


//Write a function to check whether the number is odd, if yes then return true;

function isOdd(num){
    if(num % 2 !== 0){
        return true;
    }
    else{
        return false;
    }
}

var input_2 = isOdd(5);
console.log(input_2);