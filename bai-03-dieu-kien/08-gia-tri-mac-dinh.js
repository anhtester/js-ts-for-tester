// Phí ship: phiếu có ghi thì dùng số đã ghi, không ghi thì mặc định 30.000
const phiShipDonA = undefined; // phiếu không ghi phí ship
const phiShipDonB = 0;         // phiếu ghi rõ 0: đơn được miễn phí ship

console.log(phiShipDonA || 30000);
console.log(phiShipDonB || 30000);

console.log(phiShipDonA ?? 30000);
console.log(phiShipDonB ?? 30000);

// Ghi chú đơn hàng: khách cố ý để trống
const ghiChu = '';
console.log(`[${ghiChu || 'Không có ghi chú'}]`);
console.log(`[${ghiChu ?? 'Không có ghi chú'}]`);
