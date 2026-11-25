const baseConfig = {
  baseUrl: 'https://crm.anhtester.com',
  timeout: 30000,
  headless: true,
};

// Phần khác biệt của từng môi trường
const envConfigs = {
  dev: { baseUrl: 'http://localhost:8080', headless: false },
  staging: { timeout: 60000 },
};

const env = process.env.ENV ?? 'staging';
const envConfig = envConfigs[env] ?? {};

const config = { ...baseConfig, ...envConfig };

console.log(`Môi trường: ${env}`);
console.log(config);
