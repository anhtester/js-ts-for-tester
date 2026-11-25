// Ba giá trị lấy từ một dòng của bảng đơn hàng: đều là chuỗi
const unitPriceText = '250.000 ₫';
const quantityText = '3';
const totalText = '700.000 ₫';
const discount = 50000;

// Làm sạch và đổi ra số
const unitPrice = Number(unitPriceText.replaceAll('.', '').replace('₫', '').trim());
const quantity = Number(quantityText);
const actualTotal = Number(totalText.replaceAll('.', '').replace('₫', '').trim());

// Tự tính lại rồi so với con số trên trang
const expectedTotal = unitPrice * quantity - discount;
console.log(expectedTotal);
console.log(actualTotal === expectedTotal);

// Số lần thử lại và thời gian chờ thay đổi trong lúc chạy
let retryCount = 0;
retryCount += 1;
retryCount++;
console.log(retryCount);

let timeout = 5000;
timeout *= 2;
console.log(timeout);

console.log(2 ** 3);
console.log(0.1 + 0.2);
