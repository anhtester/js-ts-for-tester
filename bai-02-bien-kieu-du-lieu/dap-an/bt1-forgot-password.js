// Bài tập 1 - Dữ liệu cho trang quên mật khẩu
const baseUrl = 'https://crm.anhtester.com';
const forgotPath = '/admin/authentication/forgot_password';
const forgotUrl = `${baseUrl}${forgotPath}`;

// Giá trị thật lấy từ trang
const actualTitle = 'Perfex CRM | Anh Tester Demo - Login';
const rawHeading = '\n            Forgot Password        ';
const rawButton = '\n                    Confirm                ';

// Làm sạch chuỗi thô
const heading = rawHeading.trim();
const button = rawButton.trim();

console.log(`URL: ${forgotUrl}`);
console.log(`Tiêu đề trên trang: ${rawHeading.length} ký tự -> ${heading.length} ký tự: "${heading}"`);
console.log(`Chữ trên nút      : ${rawButton.length} ký tự -> ${button.length} ký tự: "${button}"`);

const isHeadingCorrect = heading === 'Forgot Password';
const isTitleHasForgot = actualTitle.includes('Forgot');

console.log(`Tiêu đề trên trang đúng : ${isHeadingCorrect}`);
console.log(`Tiêu đề tab có "Forgot" : ${isTitleHasForgot}`);

// Kết luận: trang quên mật khẩu vẫn mang tiêu đề tab "... - Login",
// nên chỉ dựa vào tiêu đề tab thì không phân biệt được với trang đăng nhập.
