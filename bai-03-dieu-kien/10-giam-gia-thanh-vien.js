const hangThanhVien = 'vàng';
const giaGoc = 500000;
let phanTramGiam;

switch (hangThanhVien) {
  case 'kim cương':
    phanTramGiam = 20;
    break;
  case 'vàng':
    phanTramGiam = 10;
    break;
  case 'bạc':
    phanTramGiam = 5;
    break;
  default:
    phanTramGiam = 0;
}

const phaiTra = giaGoc * (100 - phanTramGiam) / 100;
console.log(`Hạng ${hangThanhVien}: giảm ${phanTramGiam}%, phải trả ${phaiTra}`);
