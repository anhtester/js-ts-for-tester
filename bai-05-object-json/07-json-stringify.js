const result = {
  testName: 'Mở trang đăng nhập Admin',
  status: 'passed',
  durationMs: 1250,
  note: undefined,
  tags: ['login', 'smoke'],
};

const jsonText = JSON.stringify(result);
console.log(typeof result);
console.log(typeof jsonText);
console.log(jsonText);

// Tham số thứ 3 là số dấu cách thụt lề: in ra dễ đọc
console.log(JSON.stringify(result, null, 2));
