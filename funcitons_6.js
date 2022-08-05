//Given a word in upper case convert to lower case (Don't use inbuilt functions)

var upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower_case = "abcdefghijklmnopqrstuvwxyz";

function toLowerCase(input){
    for(i=0; i<upper_case.length; i++){
        if(input == upper_case[i]){
            return lower_case[i];
        }
    }
    return input;
}

console.log(toLowerCase("Q"));