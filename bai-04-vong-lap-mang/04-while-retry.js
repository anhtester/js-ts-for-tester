// Thử mở trang đăng nhập, lỗi thì thử lại, tối đa 3 lần
const loginUrl = 'https://crm.anhtester.com/admin/authentication';
const maxAttempts = 3;
let attempt = 0;
let isPageOpened = false;

while (!isPageOpened && attempt < maxAttempts) {
  attempt++;
  // Giả lập: tới lần thứ 2 trang mới mở được
  isPageOpened = attempt === 2;
  console.log(`Lần ${attempt}: ${isPageOpened ? 'PASS' : 'FAIL'}`);
}

if (isPageOpened) {
  console.log(`Mở được ${loginUrl} sau ${attempt} lần thử`);
} else {
  console.log(`Không mở được trang sau ${maxAttempts} lần thử`);
}
