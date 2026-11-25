// ===== 1. Dữ liệu test: không đổi nên dùng const =====
const baseUrl = 'https://crm.anhtester.com';
const loginPath = '/admin/authentication';
const loginUrl = `${baseUrl}${loginPath}`;
const expectedTitle = 'Perfex CRM | Anh Tester Demo - Login';
const expectedHeading = 'Login';
const adminEmail = process.env.ADMIN_EMAIL; // chỉ ghi tên biến, không viết giá trị vào code

// ===== 2. Giá trị lấy từ trang đăng nhập Admin (chép nguyên từ trang thật) =====
const actualTitle = 'Perfex CRM | Anh Tester Demo - Login';
const rawHeading = '\n            Login        ';
const rawButton = '\n                    Login                ';

// ===== 3. Làm sạch chuỗi thô trước khi so sánh =====
const actualHeading = rawHeading.trim();
const actualButton = rawButton.trim();

// ===== 4. So sánh bằng === và includes =====
const isTitleCorrect = actualTitle === expectedTitle;
const isHeadingCorrect = actualHeading === expectedHeading;
const isButtonCorrect = actualButton.toLowerCase() === 'login';
const isLoginPage = actualTitle.includes('Login') && loginUrl.endsWith(loginPath);

// ===== 5. Kết luận chung bằng toán tử logic =====
const isAllPassed = isTitleCorrect && isHeadingCorrect && isButtonCorrect && isLoginPage;

console.log(`URL cần mở          : ${loginUrl}`);
console.log(`Email đăng nhập     : ${adminEmail} (${typeof adminEmail})`);
console.log(`Tiêu đề tab         : "${actualTitle}" -> ${isTitleCorrect}`);
console.log(`Tiêu đề h1          : "${actualHeading}" -> ${isHeadingCorrect}`);
console.log(`Chữ trên nút        : "${actualButton}" -> ${isButtonCorrect}`);
console.log(`Đúng trang đăng nhập: ${isLoginPage}`);
console.log(`Tất cả đều đạt      : ${isAllPassed}`);
