// Không đặt ENV thì chạy trên CRM demo (prod)
const env = (process.env.ENV ?? 'prod').trim().toLowerCase();
const loginPath = '/admin/authentication';
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
    console.log(`ENV="${env}" không hợp lệ. Chỉ nhận: dev | staging | prod`);
}

if (baseUrl) {
  console.log(`[${env}] Mở trang: ${baseUrl}${loginPath}`);
} else {
  console.log('DỪNG: không xác định được môi trường test');
}
