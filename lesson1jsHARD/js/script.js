let num = 33721;

let Str = String(num);

let array = Str.split('');

let result = 1;

for (let i = 0; i < array.length; i++) {
 result = result*array[i];
}
console.log(result);