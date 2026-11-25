let status = 404;
const retries = 0;
const env = 'staging';
const errorCount = '0';
const actualTitle = 'Perfex CRM | Anh Tester Demo - Login';

if (status = 200) {
  console.log('Trang phản hồi thành công');
}

const retryCount = retries || 3;
console.log(`Số lần chạy lại: ${retryCount}`);

let baseUrl;
switch (env) {
  case 'dev':
    baseUrl = 'https://dev.crm.example.com';
  case 'staging':
    baseUrl = 'https://staging.crm.example.com';
  case 'prod':
    baseUrl = 'https://crm.anhtester.com';
}
console.log(`Mở trang: ${baseUrl}`);

const result = errorCount == 0 ? (actualTitle.includes('Login') ? 'PASS' : 'FAIL-TITLE') : 'FAIL-ERROR';
console.log(result);
