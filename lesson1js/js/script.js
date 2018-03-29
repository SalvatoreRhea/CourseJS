let budget,
    shopName,
    time,
    price

function start() {
 budget = prompt("Ваш бюджет");

 while (isNaN(budget) || budget == "" || budget == null) {
  budget = prompt("Ваш бюджет");
 }

 shopName = prompt("Название вашего магазина?").toUpperCase();
 time = 21;
}
start();

mainList = {
 budget: budget,
 shopName: shopName,
 shopGoods: [],
 employers: {},
 open: true, 
 discount: false
}

// var budget = mainList.budget;
// var shopGoods = mainList.shopGoods;

// Циклы фторого урока

function calcDiscount() {
 if (discount === true) {
  price = (price*80)/100; /*price*=0.8*/
 } /*Можно без ===, так как по факту true */
}
// calcDiscount();

function hireEmployers () {
 for (let i = 1; i < 5; i++) {
  let a = prompt ("Как вас зовут?");
  mainList.employers[i] = a;
 }
}
hireEmployers();


function chooseGoods() {
for (var i = 0; i < 3; i++) {
 var a = prompt ("Какой тип товаров будем продавать?");
 // mainList.shopGoods[i] = a;
 if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
  console.log("All true");
  mainList.shopGoods[i] = a;
 } else {
  i--;
  console.log("Not true");
 }
}
}
chooseGoods();

function workTime(time) {
if (time < 0) {
 console.log("its not a possible!");
} else if (time > 8 && time < 20){
 console.log("Work time!")
} else if (time < 24) {
 console.log("To late!")
} else{
 console.log("A day only 24 hours!")
}
}
workTime(18);


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

// var i = 0;
// do {
//  var a = prompt("Какой тип товаров будем продавать?");
// if  ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
//  mainList.shopGoods[i] = a;
//  i++;
//  console.log("All true");
// } else {
//  console.log("Not True");
// }
// } while( i < 3);


// Цикл с первого урока

// for (var i = 0; i < 3; i++) {
//  shopGoods[shopGoods.length] = prompt('Какой тип товаров будем продавать?');
// }

// Цикл с первого урока закончится тут!

function calcBudget() {

 var dailyBudget = budget/30;
 alert("Бюджет на один день равен: " + dailyBudget);

}
calcBudget();

console.log(mainList);

