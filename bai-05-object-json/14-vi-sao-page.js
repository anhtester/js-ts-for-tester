// Hàm giả, mô phỏng cách Playwright chạy một test
function fakeRunTest(testFn) {
  // Playwright chuẩn bị sẵn MỘT Object chứa nhiều thứ...
  const fixtures = {
    page: 'trang giả',
    context: 'context giả',
    browserName: 'chromium',
  };
  // ...rồi truyền cả Object đó vào hàm test của bạn
  testFn(fixtures);
}

// Viết đúng: dấu { } lấy nhanh page ra khỏi Object
fakeRunTest(({ page }) => {
  console.log('Có ngoặc nhọn   :', page);
});

// Lấy nhiều thứ cùng lúc
fakeRunTest(({ page, browserName }) => {
  console.log('Lấy hai giá trị :', page, '|', browserName);
});

// Viết sai: thiếu { } nên "page" là CẢ Object
fakeRunTest((page) => {
  console.log('Thiếu ngoặc nhọn:', page);
});
