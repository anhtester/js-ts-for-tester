const user = {
  email: 'admin@example.com',
  role: 'admin',
  loginPath: '/admin/authentication',
};

// Cách cũ: mỗi thuộc tính một dòng
const email1 = user.email;
const role1 = user.role;
console.log(email1, role1);

// Lấy nhanh: tên biến trùng tên key
const { email, role } = user;
console.log(email, role);

// Đổi tên biến: lấy key loginPath, đặt vào biến adminLoginPath
const { loginPath: adminLoginPath } = user;
console.log(adminLoginPath);

// Giá trị mặc định khi key không có
const { timeout = 30000 } = user;
console.log(timeout);
