// Giỏ đi chợ: nhiều món nằm trong một biến
const basket = ['rau cải', 'cà chua', 'trứng'];

console.log(basket.length);              // số món trong giỏ
console.log(basket[0]);                  // món đầu tiên: chỉ số 0
console.log(basket[basket.length - 1]);  // món cuối cùng
console.log(basket[3]);                  // chỉ số không tồn tại

basket.push('hành lá');                  // thêm vào cuối giỏ
console.log(basket);

const removed = basket.pop();            // lấy món cuối ra khỏi giỏ
console.log(removed);
console.log(basket);
