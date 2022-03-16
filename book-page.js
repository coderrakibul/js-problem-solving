function bookPageRequirment(book1, book2, book3){
var firstBookPage = book1 * 100;
var secondBookPage = book2 * 200;
var thirdBookPage = book3 * 300;
var totalPage = firstBookPage + secondBookPage + thirdBookPage;
return totalPage;
}

var input = bookPageRequirment(10, 7, 12);
console.log(input);