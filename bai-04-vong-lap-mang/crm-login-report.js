// ===== 1. Dữ liệu đầu vào =====
const baseUrl = 'https://crm.anhtester.com';
const loginPath = '/admin/authentication';
// Email chép từ file Excel: thừa khoảng trắng, lẫn chữ hoa, có dòng trống
const rawEmails = ['  Admin@Example.com', 'pm@example.com ', '', 'customer.example.com', 'customer@example.com'];
// Mã HTTP giả lập cho từng lần thử, theo đúng thứ tự các email hợp lệ
const statusCodes = [200, 500, 200];

// ===== 2. Làm sạch rồi lọc =====
const emails = rawEmails.map(email => email.trim().toLowerCase());
const validEmails = emails.filter(email => email.includes('@'));
const skippedCount = emails.length - validEmails.length;

// ===== 3. Duyệt, ghi kết quả từng email =====
console.log(`Trang kiểm tra: ${baseUrl}${loginPath}`);
const failedEmails = [];
for (let i = 0; i < validEmails.length; i++) {
  const email = validEmails[i];
  const code = statusCodes[i];
  if (code === 200) {
    console.log(`${i + 1}. ${email} -> ${code} PASS`);
  } else {
    console.log(`${i + 1}. ${email} -> ${code} FAIL`);
    failedEmails.push(email);
  }
}

// ===== 4. Tổng kết =====
console.log(`Bỏ qua ${skippedCount} dòng không hợp lệ`);
console.log(`PASS: ${validEmails.length - failedEmails.length}, FAIL: ${failedEmails.length}`);
console.log('Email cần kiểm tra lại:', failedEmails);
