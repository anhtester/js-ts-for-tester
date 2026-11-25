const testEmails = ['admin@example.com', '', 'pm.example.com', 'customer@example.com'];

for (const email of testEmails) {
  if (email === '') {
    console.log('(rỗng) -> bỏ qua');
    continue;
  }
  if (email.includes('@')) {
    console.log(`${email} -> hợp lệ, đem đi thử đăng nhập`);
  } else {
    console.log(`${email} -> sai định dạng`);
  }
}
