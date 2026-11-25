// Lỗi 1: thừa dấu phẩy sau thuộc tính cuối
const jsonText = '{"email":"admin@example.com","role":"admin",}';
const user = JSON.parse(jsonText);
console.log(user);
