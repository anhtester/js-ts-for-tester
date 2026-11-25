// Bài tập 3 - Đoán trước, chạy sau
console.log(1 + 2 + '3'); // '33'  : 1 + 2 = 3, rồi nối với '3'
console.log('1' + 2 + 3); // '123' : có chuỗi từ đầu nên nối liên tiếp
console.log('5' * '2'); // 10    : dấu * tự đổi chuỗi ra số
console.log('a' === 'A'); // false : phân biệt hoa thường
console.log('Login' !== 'login'); // true  : khác nhau ở chữ L
console.log(0.1 + 0.2 === 0.3); // false : 0.1 + 0.2 = 0.30000000000000004
console.log('a-b-c'.replace('-', '')); // 'ab-c': chỉ thay dấu đầu tiên
console.log('Remember me'.split(' ').length); // 2     : hai phần "Remember" và "me"
console.log(typeof Number('abc')); // number: NaN vẫn có kiểu number
console.log(true && false || true); // true  : && tính trước, false || true
