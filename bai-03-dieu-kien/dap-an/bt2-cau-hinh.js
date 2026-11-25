// Bài tập 2 - Cấu hình theo môi trường
const env = (process.env.ENV ?? 'dev').trim().toLowerCase();
let timeout;

switch (env) {
  case 'dev':
    timeout = 60000;
    break;
  case 'staging':
    timeout = 30000;
    break;
  case 'prod':
    timeout = 15000;
    break;
  default:
    console.log(`ENV="${env}" không hợp lệ. Chỉ nhận: dev | staging | prod`);
}

const configRetries = 0;
const retries = configRetries ?? 2; // dùng ?? để giữ được giá trị 0

if (timeout !== undefined) {
  console.log(`[${env}] timeout=${timeout}, retries=${retries}`);
}
