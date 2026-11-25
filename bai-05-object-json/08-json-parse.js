// Chuỗi JSON, ví dụ nội dung một file .json hoặc dữ liệu API trả về
const jsonText = '{"email":"admin@example.com","role":"admin","isActive":true}';

console.log(jsonText.role); // chuỗi thì không có thuộc tính role

const user = JSON.parse(jsonText);
console.log(typeof user);
console.log(user.role);
console.log(user);
