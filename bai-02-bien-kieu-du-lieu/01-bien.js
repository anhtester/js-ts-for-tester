// const: giá trị không gán lại
const baseUrl = 'https://crm.anhtester.com';
const loginPath = '/admin/authentication';

// let: giá trị sẽ thay đổi trong lúc chạy
let retryCount = 0;
retryCount = retryCount + 1;

console.log(baseUrl);
console.log(loginPath);
console.log(retryCount);
