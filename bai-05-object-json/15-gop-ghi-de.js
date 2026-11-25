// Tờ khai mẫu: điền sẵn các giá trị hay dùng
const defaultUser = {
  email: 'admin@example.com',
  role: 'admin',
  loginPath: '/admin/authentication',
  isActive: true,
};

// Chép toàn bộ defaultUser, chỉ sửa 2 ô
const pmUser = {
  ...defaultUser,
  email: 'projectmanager@example.com',
  role: 'project-manager',
};

console.log(pmUser);
console.log(defaultUser.role); // tờ khai mẫu không bị đổi

// Sai thứ tự: giá trị mặc định đè lại giá trị mới
const wrongUser = {
  email: 'projectmanager@example.com',
  ...defaultUser,
};
console.log(wrongUser.email);
