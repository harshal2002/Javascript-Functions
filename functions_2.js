//Write a function to check if it divsible by 3

function check(num){
    if(num %3 == 0){
        return true;             //if divisible by 3, then return true statement
    }
    else{
        return false;            //if not divsible by 3, then return false statement
    }

}

var check_3 = check(7);   

console.log(check_3);

//Give a certain limit and print all the numbers divisible by 3 upto that limit
var limit = 50;

for(i=0; i<= limit; i++){
    if(i % 3 == 0){
        console.log(i)
    }
}