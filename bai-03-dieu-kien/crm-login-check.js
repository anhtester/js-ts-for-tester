// ===== 1. Chọn môi trường bằng switch =====
const env = (process.env.ENV ?? 'prod').trim().toLowerCase();
let defaultBaseUrl;

switch (env) {
  case 'dev':
    defaultBaseUrl = 'https://dev.crm.example.com';
    break;
  case 'staging':
    defaultBaseUrl = 'https://staging.crm.example.com';
    break;
  default:
    defaultBaseUrl = 'https://crm.anhtester.com';
}

// ===== 2. Giá trị mặc định bằng ?? =====
const baseUrl = process.env.BASE_URL ?? defaultBaseUrl;
const loginUrl = `${baseUrl}/admin/authentication`;
const adminEmail = process.env.ADMIN_EMAIL;

// ===== 3. Giá trị thực tế (chép từ trang đăng nhập Admin, như bài trước) =====
const expectedTitle = 'Perfex CRM | Anh Tester Demo - Login';
const actualTitle = 'Perfex CRM | Anh Tester Demo - Login';
const rawHeading = '\n            Login        ';
const status = 200;

console.log(`[${env}] URL cần mở: ${loginUrl}`);

// ===== 4. Rẽ nhánh theo từng kết quả =====
if (!adminEmail) {
  console.log('SKIP: chưa đặt ADMIN_EMAIL nên chưa thể đăng nhập');
} else {
  console.log(`INFO: sẽ đăng nhập bằng ${adminEmail}`);
}

if (status === 200) {
  console.log('PASS: trang phản hồi mã 200');
} else if (status === 404) {
  console.log('FAIL: sai đường dẫn (404)');
} else if (status >= 500) {
  console.log(`FAIL: server lỗi (${status})`);
} else {
  console.log(`FAIL: mã không mong đợi (${status})`);
}

const isTitleCorrect = actualTitle === expectedTitle;
const isHeadingCorrect = rawHeading.trim() === 'Login';

if (isTitleCorrect) {
  console.log('PASS: tiêu đề tab đúng');
} else {
  console.log(`FAIL: tiêu đề tab sai. Mong đợi "${expectedTitle}", thực tế "${actualTitle}"`);
}

console.log(`${isHeadingCorrect ? 'PASS' : 'FAIL'}: tiêu đề trên trang`);

// ===== 5. Kết luận =====
const isAllPassed = status === 200 && isTitleCorrect && isHeadingCorrect;
console.log(`KẾT LUẬN: ${isAllPassed ? 'PASS' : 'FAIL'}`);
