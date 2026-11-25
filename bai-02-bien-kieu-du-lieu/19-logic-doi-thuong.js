const coVe = true;
const dungGio = false;
const coTheATM = false;
const coTienMat = true;
const troiMua = false;

console.log(coVe && dungGio);       // VÀ: có vé VÀ đúng giờ thì được vào
console.log(coTheATM || coTienMat); // HOẶC: thẻ ATM HOẶC tiền mặt đều trả được
console.log(!troiMua);              // PHỦ ĐỊNH: KHÔNG mưa thì đi
