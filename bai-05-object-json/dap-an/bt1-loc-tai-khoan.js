// Bài tập 1 - Thêm tài khoản và lọc
const fs = require('node:fs');

// Đọc bản data đáp án (đã thêm isActive); data/users.json của bài giữ nguyên
const users = JSON.parse(fs.readFileSync('bai-05-object-json/dap-an/data/users.json', 'utf8'));

const activeUsers = users.filter((user) => user.isActive);

for (const { email, role } of activeUsers) {
  console.log(`${role} -> ${email}`);
}
