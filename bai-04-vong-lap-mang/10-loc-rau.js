// Mớ rau mua về, có bó đã héo
const vegetables = ['cải tươi', 'muống héo', 'mồng tơi tươi', 'xà lách héo'];

// filter: giữ lại các phần tử thoả điều kiện
const freshOnes = vegetables.filter(v => v.includes('tươi'));
console.log(freshOnes);

// map: đổi từng phần tử, ra mảng mới cùng số lượng
const labels = vegetables.map(v => v.toUpperCase());
console.log(labels);

// find: lấy phần tử ĐẦU TIÊN thoả điều kiện
console.log(vegetables.find(v => v.includes('héo')));
console.log(vegetables.find(v => v.includes('bắp')));

// includes: mảng có đúng giá trị này không
console.log(vegetables.includes('cải tươi'));
console.log(vegetables.includes('cải'));

// Mảng gốc không đổi
console.log(vegetables.length);
