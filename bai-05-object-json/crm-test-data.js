const fs = require('node:fs');

// ===== 1. Đọc data test từ file JSON =====
const users = JSON.parse(fs.readFileSync('bai-05-object-json/data/users.json', 'utf8'));

// ===== 2. Chọn tài khoản theo vai trò =====
const user = users.find((item) => item.role === 'admin');

// ===== 3. Gộp config mặc định với config theo môi trường =====
const baseConfig = { baseUrl: 'https://crm.anhtester.com', timeout: 30000, headless: true };
const envConfigs = { staging: { timeout: 60000 } };
const env = process.env.ENV ?? 'staging';
const config = { ...baseConfig, ...(envConfigs[env] ?? {}) };

// ===== 4. Lấy nhanh các giá trị cần dùng =====
const { baseUrl, timeout } = config;
const { email, role, loginPath } = user;

// ===== 5. Ghi lại kết quả chuẩn bị dưới dạng JSON =====
const result = {
  env,
  role,
  loginUrl: `${baseUrl}${loginPath}`,
  email,
  password: process.env.ADMIN_PASSWORD ? '***' : 'CHƯA ĐẶT BIẾN ADMIN_PASSWORD',
  timeout,
};

console.log(JSON.stringify(result, null, 2));
