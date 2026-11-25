// Gọi điện: chưa ai nghe máy thì gọi lại, nhiều nhất 3 lần
const maxCalls = 3;
let callCount = 0;
let isAnswered = false;

while (!isAnswered && callCount < maxCalls) {
  callCount++;
  console.log(`Gọi lần ${callCount}: không ai nghe máy`);
}
console.log(`Dừng sau ${callCount} lần gọi`);
