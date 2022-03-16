// 5 ta ba tar kom hole protita 25 tk kore ar 5 tar beshi hole protita 20 tk kore
function myFunction(quantity){
   var price = 0;
    if(quantity <= 5){
        price = quantity * 25;
        return price;
    }
    else if(quantity > 5){
        price = quantity * 20;
        return price;
    }
}

var input = myFunction(6);
console.log(input);