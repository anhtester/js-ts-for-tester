const baseUrl = 'https://crm.anhtester.com';
const loginPath = '/admin/authentication';
const retryCount = 2;

// Cách cũ: nối chuỗi bằng dấu +
const loginUrlOld = baseUrl + loginPath;

// Cách nên dùng: template literal với dấu backtick và ${...}
const loginUrl = `${baseUrl}${loginPath}`;

console.log(loginUrlOld);
console.log(loginUrl);
console.log(`Mở trang ${loginUrl} - lần thử thứ ${retryCount + 1}`);

// Dấu nháy đơn KHÔNG thay biến
console.log('Mở trang ${loginUrl}');
