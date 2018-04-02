let title = document.getElementById('title'),
    li = document.getElementsByTagName('li'),
    menuItem = document.getElementsByClassName('menu-item'),
    adv = document.getElementsByClassName('adv'),
    body = document.querySelector('body'),
    menu = document.getElementsByClassName('menu'),
    question = document.getElementById('prompt');

console.log(title);
console.log(li[1]);
console.log(menuItem[2]);
console.log(body);
console.log(menu);
console.log(prompt);

body.style.backgroundImage = 'url(img/apple_true.jpg)';

document.querySelector('.adv').remove();

let change = menu[0].replaceChild(li[2], li[1]);
menu[0].insertBefore(change, li[2]);


let div = document.createElement('li');
// let text = document.createTextNode('Пятый пункт');

div.classList.add("menu-item")


menu[0].appendChild(div);
// document.body.insertBefore(div, li[3]);

div.textContent = 'Пятый пункт';

question.innerHTML = prompt("Каково ваше отношение к технике Apple?");
title.innerHTML = 'Мы продем только подлинную технику Apple'



console.log(div);
// console.log(text);

