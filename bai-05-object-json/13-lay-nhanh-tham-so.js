const baseUrl = 'https://crm.anhtester.com';

// Cách 1: nhận cả Object, bên trong đọc bằng dấu chấm
function describeLogin1(user) {
  console.log(`[${user.role}] mở ${baseUrl}${user.loginPath}`);
}

// Cách 2: lấy nhanh ngay ở chỗ nhận tham số
function describeLogin2({ role, loginPath }) {
  console.log(`[${role}] mở ${baseUrl}${loginPath}`);
}

const customer = {
  email: 'customer@example.com',
  role: 'customer',
  loginPath: '/authentication/login',
};

describeLogin1(customer);
describeLogin2(customer);
