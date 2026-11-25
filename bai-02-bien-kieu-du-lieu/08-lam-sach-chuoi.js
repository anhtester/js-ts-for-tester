// Chuỗi thật lấy từ thẻ <h1> của trang đăng nhập Admin CRM (\n là ký tự xuống dòng)
const rawHeading = '\n            Login        ';

console.log(rawHeading.length);
console.log(rawHeading === 'Login');

const heading = rawHeading.trim();

console.log(heading);
console.log(heading.length);
console.log(heading === 'Login');
