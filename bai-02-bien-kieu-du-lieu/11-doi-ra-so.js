const vndText = '  1.250.000 ₫ ';
const usdText = '$1,250.00';

// Bước 1: làm sạch chuỗi. Bước 2: đổi sang số bằng Number()
const vndAmount = Number(vndText.replaceAll('.', '').replace('₫', '').trim());
const usdAmount = Number(usdText.replace('$', '').replaceAll(',', ''));

console.log(vndAmount, typeof vndAmount);
console.log(usdAmount, typeof usdAmount);
console.log(vndAmount + 50000);
