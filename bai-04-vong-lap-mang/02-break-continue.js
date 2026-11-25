// Chạy lần lượt 5 test case, đánh số từ 1 đến 5
for (let testNumber = 1; testNumber <= 5; testNumber++) {
  if (testNumber === 2) {
    console.log(`TC${testNumber}: đang tạm tắt, bỏ qua`);
    continue; // nhảy sang lượt kế tiếp
  }
  if (testNumber === 4) {
    console.log(`TC${testNumber}: trang đăng nhập không mở được, dừng chạy`);
    break; // thoát hẳn vòng lặp
  }
  console.log(`TC${testNumber}: PASS`);
}
console.log('Kết thúc');
