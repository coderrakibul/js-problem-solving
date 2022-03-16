/*
1 theke 100 unit er dam proti unit 5 taka kore....
101 theke 200 unit proti unit 6 taka kore....
201 theke proti unit 7 taka kore....

*/ 

function electricBill(unit){
    if(typeof unit != "number"){
        return "wrong input";
    }
    
    var bill = 0;
    var firstBill = 0;
    var secondBill = 0;
    var remainingBill = 0;

    if(unit >= 1 && unit <= 100){
        bill = unit * 5;
        return bill;
    }
     else if(unit > 100 && unit <= 200){
         firstBill = 100 * 5;
         remainingBill = (unit - 100) * 6;
         bill = firstBill + remainingBill;
         return bill;
    }
     else if(unit > 200){
         firstBill = 100 * 5;
         secondBill = 100 * 6;
         remainingBill = (unit - 200) * 7;
         bill = firstBill + secondBill + remainingBill;
         return bill;
    }
}

var input = electricBill(300);
console.log(input);