// Đời thường: đủ 18 tuổi thì mua vé người lớn, chưa đủ thì vé trẻ em
const tuoi = 20;

// Cách 1: if...else, phải dùng let và mất 6 dòng
let loaiVe;
if (tuoi >= 18) {
  loaiVe = 'vé người lớn';
} else {
  loaiVe = 'vé trẻ em';
}
console.log(loaiVe);

// Cách 2: toán tử 3 ngôi, 1 dòng và dùng được const
const loaiVeGon = tuoi >= 18 ? 'vé người lớn' : 'vé trẻ em';
console.log(loaiVeGon);

// Automation: đổi true/false thành chữ để ghi log
const isTitleCorrect = false;
const result = isTitleCorrect ? 'PASS' : 'FAIL';
console.log(`Kiểm tra tiêu đề: ${result}`);
