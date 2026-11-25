// Danh sách email dùng để thử form đăng nhập Admin của CRM demo
const testEmails = ['admin@example.com', 'pm@example.com'];
testEmails.push('customer@example.com');

console.log(`Có ${testEmails.length} email test`);

// i chạy từ 0 tới length - 1: đúng bằng các chỉ số của mảng
for (let i = 0; i < testEmails.length; i++) {
  console.log(`${i}: ${testEmails[i]}`);
}
