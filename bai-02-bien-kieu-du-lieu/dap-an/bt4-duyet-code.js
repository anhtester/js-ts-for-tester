// Bài tập 4 - Bản đã sửa 6 dòng của code AI
const baseUrl = 'https://crm.anhtester.com'; // 1. var -> const, bỏ dấu / ở cuối
const loginUrl = `${baseUrl}/admin/authentication`; // 2. nháy đơn -> backtick
const rawHeading = '\n            Login        ';
const quantityText = '10';
let retryCount = 0; // 3. cần tăng giá trị nên dùng let

console.log(loginUrl);
console.log(rawHeading.trim() === 'Login'); // 4. trim() trước, so bằng ===
console.log(Number(quantityText) + 5); // 5. đổi ra số rồi mới cộng
console.log(Number('900') > Number('1250')); // 6. so sánh số, không so sánh chuỗi
retryCount++;
console.log(retryCount);
