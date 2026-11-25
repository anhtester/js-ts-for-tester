// Bài tập 3 - Bản đã sửa code AI
const status = 404;
const retries = 0;
const env = 'staging';
const errorCount = '0';
const actualTitle = 'Perfex CRM | Anh Tester Demo - Login';

// Sửa: một dấu = là gán -> dùng ===
if (status === 200) {
  console.log('Trang phản hồi thành công');
} else {
  console.log(`Trang phản hồi mã ${status}`);
}

// Sửa: || thay mất giá trị 0 -> dùng ??
const retryCount = retries ?? 3;
console.log(`Số lần chạy lại: ${retryCount}`);

// Sửa: thêm break cho từng case và thêm default
let baseUrl;
switch (env) {
  case 'dev':
    baseUrl = 'https://dev.crm.example.com';
    break;
  case 'staging':
    baseUrl = 'https://staging.crm.example.com';
    break;
  case 'prod':
    baseUrl = 'https://crm.anhtester.com';
    break;
  default:
    console.log(`ENV="${env}" không hợp lệ`);
}
console.log(`Mở trang: ${baseUrl}`);

// Sửa: bỏ ==, đổi ra số rồi so bằng ===; bỏ toán tử 3 ngôi lồng nhau
let result;
if (Number(errorCount) !== 0) {
  result = 'FAIL-ERROR';
} else if (actualTitle.includes('Login')) {
  result = 'PASS';
} else {
  result = 'FAIL-TITLE';
}
console.log(result);
