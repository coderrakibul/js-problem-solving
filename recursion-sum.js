let sum = 0;
for(let i = 5; i > 0; i--){
    sum = sum + i;
}

console.log(sum);



//recursion
function addition(i){
    console.log(i);
    if(i==1){
        return 1;
    }
    return i + addition(--i)
}
console.log(addition(5))