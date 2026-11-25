const expectedTitle = 'Perfex CRM | Anh Tester Demo - Login';
const actualTitle = 'Perfex CRM | Anh Tester Demo - Login'; // giá trị lấy từ trang

const isTitleCorrect = actualTitle === expectedTitle;

if (isTitleCorrect) {
  console.log('PASS: tiêu đề trang đăng nhập đúng');
} else {
  console.log('FAIL: tiêu đề trang đăng nhập sai');
  console.log(`  Mong đợi: "${expectedTitle}"`);
  console.log(`  Thực tế : "${actualTitle}"`);
}
