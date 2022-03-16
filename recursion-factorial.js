// let factorial = 1;
// for(let i = 4; i>=1; i--){
//     factorial = factorial * i;
// }

// console.log(factorial);


function factorial(number){
    if(number == 1){
        return 1;
    }
    return factorial(number-1) * number;
}

factorial(4);