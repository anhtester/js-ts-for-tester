const mauDen = 'vàng';

if (mauDen === 'xanh') {
  console.log('Được đi');
} else if (mauDen === 'vàng') {
  console.log('Đi chậm lại, chuẩn bị dừng');
} else if (mauDen === 'đỏ') {
  console.log('Dừng lại');
} else {
  console.log(`Đèn báo màu lạ (${mauDen}): quan sát kỹ rồi mới đi`);
}

console.log('Dòng này luôn chạy, dù đèn màu gì');
