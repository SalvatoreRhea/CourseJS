

mainList = {
 budget: +prompt("Ваш бюджет"),
 shopName: prompt("Название вашего магазина?"),
 shopGoods: [],
 employers: {},
 open: true 
}

var budget = mainList.budget;
var shopGoods = mainList.shopGoods;

// Циклы фторого урока

// for (var i = 0; i < 3; i++) {
//  var a = prompt ("Какой тип товаров будем продавать?");
//  // mainList.shopGoods[i] = a;
//  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
//   console.log("All true");
//   mainList.shopGoods[i] = a;
//  } else {
//   i--;
//   console.log("Not true");
//  }
// }

// var i = 0;
// while (i < 3) {
// var a = prompt("Какой тип товаров будем продавать?")

// if  ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
//  mainList.shopGoods[i] = a;
//  i++;
//  console.log("All true");
// } else {
//  console.log("Not True");
// }
// }

var i = 0;
do {
 var a = prompt("Какой тип товаров будем продавать?");
if  ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
 mainList.shopGoods[i] = a;
 i++;
 console.log("All true");
} else {
 console.log("Not True");
}
} while( i < 3);


// Цикл с первого урока

// for (var i = 0; i < 3; i++) {
//  shopGoods[shopGoods.length] = prompt('Какой тип товаров будем продавать?');
// }

// Цикл с первого урока закончится тут!

var dailyBudget = budget/30;

alert("Бюджет на один день равен: " + dailyBudget);

console.log(mainList);

