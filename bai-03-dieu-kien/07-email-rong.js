// 1. Thiếu biến môi trường: undefined là falsy
const adminEmail = process.env.ADMIN_EMAIL;

if (!adminEmail) {
  console.log('DỪNG: chưa đặt biến môi trường ADMIN_EMAIL');
} else {
  console.log(`Đăng nhập bằng email: ${adminEmail}`);
}

// 2. Bẫy chuỗi: ô Email chỉ có 3 dấu cách vẫn là truthy
const emailInput = '   ';

if (emailInput) {
  console.log('Chưa trim: ô Email bị coi là ĐÃ nhập');
}
if (!emailInput.trim()) {
  console.log('Đã trim  : ô Email đang rỗng');
}

// 3. Bẫy số 0: giảm giá 0 đồng là giá trị hợp lệ, nhưng 0 là falsy
const discount = 0;

if (!discount) {
  console.log('Viết !discount             : báo "chưa nhập giảm giá" (SAI)');
}
if (discount === undefined) {
  console.log('Chưa nhập giảm giá');
} else {
  console.log(`Viết discount === undefined: giảm giá là ${discount} (ĐÚNG)`);
}
