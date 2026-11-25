const defaultUser = { email: 'admin@example.com', role: 'admin', profile: { language: 'en' } };

const customer = { role: 'customer', ...defaultUser };
console.log(customer.role);

const copy = { ...defaultUser };
copy.profile.language = 'vi';
console.log(defaultUser.profile.language);

const sameData = { role: 'admin' };
console.log(sameData === { role: 'admin' });

console.log(defaultUser.company.name);

const user = JSON.parse(defaultUser);
console.log(user.email);
