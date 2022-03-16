function smaller(a, b, c){


    if(a < b && a < c){
        return a;
    }
    else if(b < a && b < c){
        return b;
    }
    else{
        return c;
    }
}

var result = smaller(5, 4, 7);
console.log(result);