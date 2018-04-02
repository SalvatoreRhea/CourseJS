let btn = document.getElementById('open-btn'),
    nameValue = document.getElementsByClassName('name-value')[0],
    budgetValue = document.getElementsByClassName('budget-value')[0],
    goodsValue = document.getElementsByClassName('goods-value')[0],
    itemsValue = document.getElementsByClassName('items-value')[0],
    employersValue = document.getElementsByClassName('employers-value')[0],
    discountValue = document.getElementsByClassName('discount-value')[0],
    isopenValue = document.getElementsByClassName('isopen-value')[0],
    goodsItem = document.getElementsByClassName('goods-item'),
    goodsBtn = document.getElementsByTagName('button')[1],
    budgetBtn = document.getElementsByTagName('button')[2],
    employersBtn = document.getElementsByTagName('button')[3],
    chooseItem = document.querySelector('.choose-item'),
    timeValue = document.querySelector('.time-value'),
    countBudgetValue = document.querySelector('.count-budget-value'),
    hireEmployersItem = document.querySelectorAll('.hire-employers-item');


let budget,
    price;


btn.addEventListener('click', () => {
    budget = prompt("Ваш бюджет", '');

 while (isNaN(budget) || budget == "" || budget == null) {
  budget = prompt("Ваш бюджет", '');
 }
 budgetValue.textContent = budget;
 nameValue.textContent = prompt("Название вашего магазина?", '').toUpperCase();
 
});


goodsBtn.addEventListener('click', () => {
    for (var i = 0; i < goodsItem.length; i++) {
 var a = goodsItem[i].value;
 if ((typeof(a)) === 'string' && (typeof(a)) !== null && a.length < 50 ) {
  console.log("All true");
  mainList.shopGoods[i] = a;
  goodsValue.textContent = mainList.shopGoods;
 } else {
  i--;
  console.log("Not true");
 }
}
});

chooseItem.addEventListener('change', () => {
       let items = chooseItem.value;
   if (isNaN(items) !== 'string' && items !="") { 
   mainList.shopItems = items.split(",");
   mainList.shopItems.sort();

   itemsValue.textContent = mainList.shopItems;
  }
});


timeValue.addEventListener('change', () => {
    let time = timeValue.value;
    if (time < 0) {
 console.log("its not a possible!");
 mainList.open = false;
} else if (time > 8 && time < 20){
 console.log("Work time!");
 mainList.open = true;
} else if (time < 24) {
 console.log("To late!")
 mainList.open = false;
} else{
 console.log("A day only 24 hours!");
 mainList.open = false;
};

if (mainList.open == true) {
    isopenValue.style.backgroundColor = 'green'
} else {
    isopenValue.style.backgroundColor = 'red'
}

});

budgetBtn.addEventListener('click', () => {
    countBudgetValue.value = budget / 30;
});

employersBtn.addEventListener('click', () => {
     for (let i = 0; i < hireEmployersItem.length; i++) {
  let name = hireEmployersItem[i].value;
  mainList.employers[i] = name;

  employersValue.textContent += mainList.employers[i] + ', ';
 }
});





const mainList = {
 // budget: budget,
 // shopName: shopName,
 shopGoods: [],
 employers: {},
 open: false, 
 discount: false,
  calcDiscount: function calcDiscount() {
 if (discount === true) {
  price = (price*80)/100; /*price*=0.8*/
 } /*Можно без ===, так как по факту true */
}
  
}



// console.log(goodsItem);    
// console.log(button);    
// console.log(count);    
// console.log(hireEmployersItem);    
  



