// Bài tập 1 - Làm sạch danh sách
const rawMenus = ['  Dashboard', 'Customers ', '', ' Projects  ', 'Tasks\n'];

const menus = rawMenus.map((menu) => menu.trim()).filter((menu) => menu !== '');

for (let i = 0; i < menus.length; i++) {
  console.log(`${i + 1}. ${menus[i]}`);
}

console.log(menus.includes('Projects'));
