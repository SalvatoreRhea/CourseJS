

mainList = {
 budget: +prompt("Ваш бюджет"),
 shopName: prompt("Название вашего магазина?"),
 shopGoods: [],
 employers: {},
 open: true 
}

var budget = mainList.budget;
var shopGoods = mainList.shopGoods;

for (var i = 0; i < 3; i++) {
 shopGoods[shopGoods.length] = prompt('Какой тип товаров будем продавать?');
}

var dailyBudget = budget/30;

alert("Бюджет на один день равен: " + dailyBudget);

console.log(shopGoods);







































// //Создаём переменные.
// var budget;
// var shopName;

// //Присваиваем этим переменным значения, введённые пользователем.
// budget = prompt("Ваш бюджет?");
// console.log(budget);
// shopName = prompt("Название вашего магазина?");
// console.log(shopName);