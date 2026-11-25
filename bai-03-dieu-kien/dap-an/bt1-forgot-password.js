// Bài tập 1 - Kiểm tra tiêu đề trang quên mật khẩu
const rawHeading = '\n            Forgot Password        ';
const expectedHeading = 'Forgot Password';
const actualHeading = rawHeading.trim(); // bỏ thử .trim() để thấy nhánh FAIL

if (actualHeading === expectedHeading) {
  console.log('PASS: tiêu đề trang quên mật khẩu đúng');
} else {
  console.log('FAIL: tiêu đề trang quên mật khẩu sai');
  console.log(`  Mong đợi: "${expectedHeading}"`);
  console.log(`  Thực tế : "${actualHeading}"`);
}

console.log(`Kết quả: ${actualHeading === expectedHeading ? 'PASS' : 'FAIL'}`);
