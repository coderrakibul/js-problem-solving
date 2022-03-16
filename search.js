function searchProducts(products, searchText){
    var result = [];
    for(var product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
       
    }
  return result;
}

var productList = [
    {name: "iphone mobile", price: 85000},
    {name: "samsung mobile", price: 45000},
    {name: "xiaomi mobile", price: 40000},
    {name: "oneplus mobile", price: 30000},
    {name: "mackbook pro laptop", price: 90000},
    {name: "sony experia mobile", price: 20000},
    {name: "asus laptop", price: 45000},
    {name: "hp laptop", price: 50000},
    {name: "lenovo idea pad laptop", price: 40000},
];
var search = searchProducts(productList, "mackbook");
console.log(search);