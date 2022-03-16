function grade(marks){
    if(marks < 50){
        return "Grade : F";
    }
    else if(marks >= 50 && marks < 60){
        return "Grade : D";
    }
    else if(marks >= 60 && marks < 70){
        return "Grade : C";
    }
    else if(marks >= 70 && marks < 80){
        return "Grade : B";
    }
    else if(marks >= 80 && marks < 90){
        return "Grade : A";
    }
    else if(marks >= 90 && marks <=100){
        return "Grade : A+"
    }
    else{
        return "Wrong Input"
    }
}

var aliasMark = 95;
var daliasMark = 66;
var kaliasMark = 47;
var saliasMark = 77;
var maliasMark = 100;

console.log(grade(aliasMark));
console.log(grade(daliasMark));
console.log(grade(kaliasMark));
console.log(grade(saliasMark));
console.log(grade(maliasMark));