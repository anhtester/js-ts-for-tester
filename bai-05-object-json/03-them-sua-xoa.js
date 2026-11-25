const adminUser = {
  email: 'admin@example.com',
  role: 'admin',
  tempNote: 'ghi chú tạm',
};

adminUser.role = 'project-manager'; // sửa thuộc tính đã có
adminUser.isActive = true;          // thêm thuộc tính mới
delete adminUser.tempNote;          // xoá thuộc tính

console.log(adminUser);

// Gán lại CẢ biến thì const không cho
adminUser = { email: 'khac@example.com' };
