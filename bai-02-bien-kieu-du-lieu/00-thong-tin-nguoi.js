// Lưu thông tin của một người vào biến
const ten = 'An';
let tuoi = 25;
const diaChi = 'Hà Nội';

console.log(ten);
console.log(tuoi);
console.log(diaChi);

// Dùng lại dữ liệu đã lưu để tính toán
const tuoiNamSau = tuoi + 1;
console.log(`Năm sau ${ten} ${tuoiNamSau} tuổi`);

// Sinh nhật: tuổi thay đổi nên gán lại được (vì khai báo bằng let)
tuoi = 26;
console.log(tuoi);
