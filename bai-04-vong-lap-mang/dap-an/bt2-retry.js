// Bài tập 2 - Thử lại có giới hạn
const maxAttempts = 5; // hạ xuống 3 rồi chạy lại để so sánh
let attempt = 0;
let isPageOpened = false;

while (!isPageOpened && attempt < maxAttempts) {
  attempt++;
  // Giả lập: tới lần thứ 4 trang mới mở được
  isPageOpened = attempt === 4;
  console.log(`Lần ${attempt}: ${isPageOpened ? 'PASS' : 'FAIL'}`);
}

if (isPageOpened) {
  console.log(`Mở được trang sau ${attempt} lần thử`);
} else {
  console.log(`Không mở được trang sau ${maxAttempts} lần thử`);
}

// Với maxAttempts = 3: vòng lặp dừng trước lần thứ 4 nên kết quả là không mở được.
