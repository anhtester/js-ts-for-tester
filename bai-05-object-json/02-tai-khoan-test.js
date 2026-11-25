const adminUser = {
  email: process.env.ADMIN_EMAIL ?? 'admin@example.com',
  role: 'admin',
  loginPath: '/admin/authentication',
  'display-name': 'Admin Anh Tester',
};

// Cách 1: dấu chấm - dùng nhiều nhất
console.log(adminUser.email);
console.log(adminUser.role);

// Cách 2: ngoặc vuông - khi tên key có dấu gạch ngang...
console.log(adminUser['display-name']);

// ...hoặc khi tên key nằm trong một biến
const field = 'loginPath';
console.log(adminUser[field]);
