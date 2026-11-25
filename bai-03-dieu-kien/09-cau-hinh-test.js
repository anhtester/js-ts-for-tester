// Có đặt BASE_URL thì dùng, không thì chạy trên CRM demo
const baseUrl = process.env.BASE_URL ?? 'https://crm.anhtester.com';
console.log(`Môi trường test: ${baseUrl}`);

// Cấu hình của nhóm: 0 nghĩa là KHÔNG chạy lại test lỗi
const configRetries = 0;

const retriesWrong = configRetries || 2;
const retriesRight = configRetries ?? 2;

console.log(`Dùng || : chạy lại ${retriesWrong} lần`);
console.log(`Dùng ?? : chạy lại ${retriesRight} lần`);
