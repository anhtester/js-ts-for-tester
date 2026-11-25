const statusCodes = [200, 404, 200, 500];
let failCount = 0;

for (let i = 0; i <= statusCodes.length; i++) {
  if (statusCodes[i] !== 200) {
    failCount++;
  }
}
console.log(`FAIL: ${failCount}`);

for (const i in statusCodes) {
  console.log(`Request ${i + 1}: ${statusCodes[i]}`);
}

const firstError = statusCodes.find(code => code >= 600);
console.log(firstError.toString());
