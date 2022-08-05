//Use the function to find the sum of multiples of 5 till the given limit


function isDivisibleBy5(limit){
    
    var limit = 10;
    for(i=0; i<=limit; i++){
        if(i%5 == 0){
            console.log(i);
        }
    }
}

isDivisibleBy5(10);