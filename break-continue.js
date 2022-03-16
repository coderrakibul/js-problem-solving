//use of break
function breakUse(numbers){
    store = [];
    for(number of numbers){
        if(number < 20){
            store.push(number);
            break;
        }
    }
    return store;
}

var numberList = [30, 45, 46, 10, 24, 8, 12, 16, 30];
var result = breakUse(numberList);
console.log(result);

//use of continue
function continueUse(numbers){
    store = [];
    for(number of numbers){
        if(number < 20){
            store.push(number);
            continue;
        }
    }
    return store;
}

var numberList = [30, 45, 46, 10, 24, 8, 12, 16, 30];
var result = continueUse(numberList);
console.log(result);
