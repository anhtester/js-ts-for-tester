// Bài tập 2 - Làm sạch và đổi ra số
const usdText = '  $2,400.00 ';
const vndText = '3.600.000 ₫';
const pagingText = 'Showing 1 to 25 of 137 entries';

// Kiểu Mỹ: bỏ $ và dấu phẩy ngăn hàng nghìn, giữ dấu chấm thập phân
const usdAmount = Number(usdText.replace('$', '').replaceAll(',', '').trim());

// Kiểu Việt Nam: bỏ dấu chấm ngăn hàng nghìn và ký hiệu ₫
const vndAmount = Number(vndText.replaceAll('.', '').replace('₫', '').trim());

// Cắt theo khoảng trắng: Showing(0) 1(1) to(2) 25(3) of(4) 137(5) entries(6)
const totalEntries = Number(pagingText.split(' ')[5]);

console.log(usdAmount, typeof usdAmount);
console.log(vndAmount, typeof vndAmount);
console.log(totalEntries, typeof totalEntries);
