const config = {
  baseUrl: 'https://crm.anhtester.com',
  timeout: 30000,
  headless: true,
};

console.log(Object.keys(config));
console.log(Object.values(config));
console.log(Object.entries(config));

for (const key of Object.keys(config)) {
  console.log(`${key} = ${config[key]}`);
}
