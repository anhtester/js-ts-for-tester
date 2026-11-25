// Bài tập 2 - Bản đã sửa code AI
const defaultUser = { email: 'admin@example.com', role: 'admin', profile: { language: 'en' } };

// 1. ...defaultUser đứng đầu để giá trị mới ghi đè
const customer = { ...defaultUser, role: 'customer' };
console.log(customer.role);

// 2. Sao chép mọi tầng, sửa bản sao không đụng bản gốc
const copy = structuredClone(defaultUser);
copy.profile.language = 'vi';
console.log(defaultUser.profile.language);

// 3. So từng thuộc tính, không so hai Object
const sameData = { role: 'admin' };
console.log(sameData.role === 'admin');

// 4. Chặn dữ liệu thiếu bằng ?. và ??
console.log(defaultUser.company?.name ?? 'chưa có công ty');

// 5. defaultUser đã là Object nên bỏ JSON.parse
const user = defaultUser;
console.log(user.email);
