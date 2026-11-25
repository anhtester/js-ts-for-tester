// Bài tập 3 - Bản đã sửa code AI
const statusCodes = [200, 404, 200, 500];
let failCount = 0;

// Sửa: <= thành <
for (let i = 0; i < statusCodes.length; i++) {
  if (statusCodes[i] !== 200) {
    failCount++;
  }
}
console.log(`FAIL: ${failCount}`);

// Sửa: for...in thành for...of, tự đếm số thứ tự
let requestNumber = 0;
for (const code of statusCodes) {
  requestNumber++;
  console.log(`Request ${requestNumber}: ${code}`);
}

// Sửa: kiểm undefined trước khi dùng kết quả của find
const firstError = statusCodes.find((code) => code >= 600);
if (firstError === undefined) {
  console.log('Không tìm thấy mã lỗi từ 600 trở lên');
} else {
  console.log(firstError.toString());
}
