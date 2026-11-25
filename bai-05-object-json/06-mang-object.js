const users = [
  { email: 'admin@example.com', role: 'admin', loginPath: '/admin/authentication' },
  { email: 'projectmanager@example.com', role: 'project-manager', loginPath: '/admin/authentication' },
  { email: 'customer@example.com', role: 'customer', loginPath: '/authentication/login' },
];

// Duyệt từng tài khoản
for (const user of users) {
  console.log(`${user.role} -> ${user.email}`);
}

// find: lấy MỘT tài khoản theo vai trò
const customer = users.find((user) => user.role === 'customer');
console.log(customer);

// filter: lấy CÁC tài khoản đăng nhập ở khu quản trị
const adminAreaUsers = users.filter((user) => user.loginPath === '/admin/authentication');
console.log(adminAreaUsers.length);

// find không thấy thì trả undefined
const guest = users.find((user) => user.role === 'guest');
console.log(guest?.email ?? 'không có tài khoản guest');
