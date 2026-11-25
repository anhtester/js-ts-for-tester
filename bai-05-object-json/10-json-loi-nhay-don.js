// Lỗi 2: dùng nháy đơn thay cho ngoặc kép
const jsonText = "{'email':'admin@example.com'}";
const user = JSON.parse(jsonText);
console.log(user);
