// shudhu munafa
function prophitCal(principle, time){
    prophit = principle * time * 0.10;
    return prophit;
}
var input = prophitCal(100000, 5);
console.log(input);


// munafa soho asol
function prophitCal(principle, time){
    prophit = principle * time * 0.10;
    result = prophit + principle;
    return result;
}

var input = prophitCal(100000, 5);
console.log(input);
