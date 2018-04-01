let budget,
    shopName,
    time,
    price,
    shopItems = []

function start() {
 budget = prompt("Ваш бюджет", '');

 while (isNaN(budget) || budget == "" || budget == null) {
  budget = prompt("Ваш бюджет", '');
 }

 shopName = prompt("Название вашего магазина?", '').toUpperCase();
 time = 21;
}
start();

mainList = {
 budget: budget,
 shopName: shopName,
 shopGoods: [],
 employers: {},
 open: false, 
 discount: false,
 chooseGoods: function chooseGoods() {
for (var i = 0; i < 3; i++) {
 var a = prompt ("Какой тип товаров будем продавать?", '');
 // mainList.shopGoods[i] = a;
 if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50 ) {
  console.log("All true");
  mainList.shopGoods[i] = a;
 } else {
  i--;
  console.log("Not true");
 }
}
},
  workTime: function workTime(time) {
if (time < 0) {
 console.log("its not a possible!");
} else if (time > 8 && time < 20){
 console.log("Work time!")
 mainList.open = true;
} else if (time < 24) {
 console.log("To late!")
} else{
 console.log("A day only 24 hours!")
}
},
  calcBudget: function calcBudget() {
 var dailyBudget = budget/30;
 alert("Бюджет на один день равен: " + dailyBudget);

},
  calcDiscount: function calcDiscount() {
 if (discount === true) {
  price = (price*80)/100; /*price*=0.8*/
 } /*Можно без ===, так как по факту true */
},
  hireEmployers: function hireEmployers() {
 for (let i = 1; i < 5; i++) {
  let name = prompt ("Имя сотрудника", '');
  while (typeof(name) !== 'string' || name == "" || name == null) {
   name = prompt ("Имя сотрудника", '');
  }
  mainList.employers[i] = name;
 }
},
  chooseShopItems: function chooseShopItems() {
   let items = prompt("Перечислите через запятую товары", '');
   while (typeof(items) !== 'string' || items =="" || items == null) {
    items = prompt("Перечислите через запятую товары", '');
   }
   mainList.shopItems = items.split(",");
   let waiting = prompt("Подождите, еще", '');
   while (typeof(waiting) !== 'string' || waiting =="" || waiting == null) {
    waiting = prompt("Подлождите, еще", '');
   };
   mainList.shopItems.push(waiting);
   mainList.shopItems.sort();
   document.write("У нас вы можете купить <br>");
   mainList.shopItems.forEach(function(item,i) {
 document.write((i+1) + ": " + item + "<br>")
 })
  }
}
  console.log("Наш магазин включает в себя: ");
for (var key in mainList) {
  console.log(key);
}


console.log(mainList);


// var budget = mainList.budget;
// var shopGoods = mainList.shopGoods;








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




