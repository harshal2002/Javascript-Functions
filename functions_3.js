var up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lw = "abcdefghijklmnopqrstuvwxyz";


function toLowerCase(char){
    for(var i = 0; i <= up.length; i++){
        if(char == up[i]){
            return lw[i];
        }
    }
}
var lower_case = toLowerCase("ARYAN");
console.log(lower_case);


// var naam = "HARSHAL IS THE BEST IN THE WORLD";
// var op = ""

// for(var i = 0; i< naam.length; i++ ){
//   var lw = toLowerCase(naam[i]);
//   op = op + lw;
   
// }
// console.log(op)
