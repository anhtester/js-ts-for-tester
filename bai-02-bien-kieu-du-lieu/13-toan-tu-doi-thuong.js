// Đi chợ: 3 kg cam giá 40.000/kg, 1 túi gạo 150.000, được giảm 20.000
const tienCam = 3 * 40000;
const tongTien = tienCam + 150000 - 20000;
console.log(tienCam);
console.log(tongTien);

// 4 người chia đều hoá đơn
console.log(tongTien / 4);
console.log(tongTien % 4); // phần dư bằng 0 nghĩa là chia hết

// Tiết kiệm cộng dồn mỗi tháng 2.000.000
let tietKiem = 0;
tietKiem += 2000000;
tietKiem += 2000000;
console.log(tietKiem);
