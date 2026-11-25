const customerUser = {
  email: 'customer@example.com',
  role: 'customer',
};

// Đọc key không có: ra undefined, KHÔNG báo lỗi
console.log(customerUser.phone);

// ?? lấy giá trị mặc định khi thuộc tính thiếu
console.log(customerUser.phone ?? 'chưa có số');

// ?. trả undefined nếu phía trước nó không có gì
console.log(customerUser.company?.name);
console.log(customerUser.company?.name ?? 'khách lẻ');

// Không có ?. thì chương trình dừng với TypeError
console.log(customerUser.company.name);
