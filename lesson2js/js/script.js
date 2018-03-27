let num = 50;

if(num < 49) {
 console.log("НЕ Верно")
} else if (num > 100) {
 console.log("Не верно")
} else {
 console.log("Верно!")
}

(num == 50)? console.log("Dthyj") : console.log("yt верноре");


switch (num) {
 case 49:
  console.log("Мало");
  break;
 case 100:
  console.log("Много");
  break;
 case 80:
  console.log("Все еще Мало");
  break;
 case 50:
  console.log("D точку");
  break;
 default:
  console.log("Не в этот раз");
  break;
}


// while (num < 55) {
//  console.log(num);
//  num++;
// }

// do {
//  console.log(num)
//  num++;
// }
// while (num < 55);

for (let i = 0; i < 8; i++) {
 console.log(i);
}