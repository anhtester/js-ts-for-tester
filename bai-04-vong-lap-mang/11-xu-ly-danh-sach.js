// 1. Text các nhãn lấy từ trang đăng nhập: dính khoảng trắng, xuống dòng
const rawLabels = ['\n  Email Address ', ' Password\n', '  Remember me  '];
const labels = rawLabels.map(text => text.trim());
console.log(labels);

// 2. Mã HTTP của 5 request: lọc ra các mã lỗi (từ 400 trở lên)
const statusCodes = [200, 200, 404, 500, 200];
const errorCodes = statusCodes.filter(code => code >= 400);
console.log(errorCodes);
console.log(`PASS: ${statusCodes.length - errorCodes.length}, FAIL: ${errorCodes.length}`);
console.log(statusCodes.some(code => code >= 500));
console.log(statusCodes.every(code => code === 200));

// 3. Tìm email theo vai trò
const testEmails = ['admin@example.com', 'pm@example.com', 'customer@example.com'];
const pmEmail = testEmails.find(email => email.includes('pm@'));
const guestEmail = testEmails.find(email => email.includes('guest@'));
console.log(pmEmail);
console.log(guestEmail);

// 4. Trình duyệt truyền vào có nằm trong danh sách hỗ trợ không
const supportedBrowsers = ['chromium', 'firefox', 'webkit'];
const browser = process.env.BROWSER ?? 'chromium';
if (supportedBrowsers.includes(browser)) {
  console.log(`Chạy test trên ${browser}`);
} else {
  console.log(`Không hỗ trợ trình duyệt: ${browser}`);
}
