var items = ["book", "pen"];
var wishlist = ["tablet", "laptop"]
items.push.apply(items, wishlist);
console.log(items);


var items = ["book", "pen"];
items.push("slider");
console.log(items);