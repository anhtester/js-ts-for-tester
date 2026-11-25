const baseConfig = {
  baseUrl: 'https://crm.anhtester.com',
  viewport: { width: 1280, height: 720 },
};

const mobileConfig = { ...baseConfig };

// Thuộc tính tầng ngoài: sửa bản sao, bản gốc giữ nguyên
mobileConfig.baseUrl = 'https://m.crm.anhtester.com';
console.log(baseConfig.baseUrl);

// Object lồng bên trong: hai bản vẫn dùng CHUNG
mobileConfig.viewport.width = 390;
console.log(baseConfig.viewport.width);

// Cách đúng: tạo Object mới cho cả phần lồng
const tabletConfig = {
  ...baseConfig,
  viewport: { ...baseConfig.viewport, width: 768 },
};
console.log(tabletConfig.viewport.width, baseConfig.viewport.width);

// Dấu ... cũng gộp được mảng
const browsers = [...['chromium', 'firefox'], ...['webkit']];
console.log(browsers);
