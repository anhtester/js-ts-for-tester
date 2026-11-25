const responseTime = 3500; // thời gian phản hồi, tính bằng mili giây

// SAI: điều kiện rộng đứng trước, nhánh "rất chậm" không bao giờ chạy tới
if (responseTime > 1000) {
  console.log('Cách 1: chậm');
} else if (responseTime > 3000) {
  console.log('Cách 1: rất chậm, báo bug hiệu năng');
} else {
  console.log('Cách 1: đạt');
}

// ĐÚNG: điều kiện hẹp (khắt khe hơn) đứng trước
if (responseTime > 3000) {
  console.log('Cách 2: rất chậm, báo bug hiệu năng');
} else if (responseTime > 1000) {
  console.log('Cách 2: chậm');
} else {
  console.log('Cách 2: đạt');
}
