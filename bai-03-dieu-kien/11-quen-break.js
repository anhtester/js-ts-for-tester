const hangThanhVien = 'vàng';
let phanTramGiam;

switch (hangThanhVien) {
  case 'kim cương':
    phanTramGiam = 20;
  case 'vàng':
    phanTramGiam = 10;
    console.log('Vào case vàng');
  case 'bạc':
    phanTramGiam = 5;
    console.log('Chạy tiếp sang case bạc');
  default:
    phanTramGiam = 0;
    console.log('Chạy tiếp sang default');
}

console.log(`Hạng ${hangThanhVien}: giảm ${phanTramGiam}%`);
