//for loop
for(var i = 1; i<6; i++){
    console.log(i);
}

//same kaj function a... akhane function er vetorei function ke call kora hocche jake recursion bole... akhane function er vetor function ke call kora mane function ta bar bar chalano jeta loop er moto kaj kore... kintu akhane kono condition na dile ata choltei thakbe joto khon na browser hang hoy ba vs code stop kore day... 
function recursion(number){
    if(number > 5){
        return;
    }
    console.log(number);
    recursion(number+1);
}
recursion(1);