console.log(Number('1250.50'));
console.log(Number(' 42 '));
console.log(Number('$1,250.00'));
console.log(Number('15px'));
console.log(Number(''));

console.log(parseFloat('1250.50'));
console.log(parseFloat('15px'));
console.log(parseFloat('1,250.00'));
console.log(parseFloat('$1,250.00'));

const amount = Number('$1,250.00');
console.log(Number.isNaN(amount));
console.log(typeof amount);
