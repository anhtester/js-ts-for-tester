const fs = require('node:fs');

// Đường dẫn tính từ thư mục project, nơi bạn gõ lệnh node
const jsonText = fs.readFileSync('bai-05-object-json/data/users.json', 'utf8');
console.log(typeof jsonText);

const users = JSON.parse(jsonText);
console.log(users.length);

const pm = users.find((user) => user.role === 'project-manager');
console.log(pm.email);
