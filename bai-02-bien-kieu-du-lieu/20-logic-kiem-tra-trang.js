const pageTitle = 'Perfex CRM | Anh Tester Demo - Login';
const heading = 'Login';
const errorCount = 0;

const isTitleCorrect = pageTitle.includes('Login');
const isHeadingCorrect = heading === 'Login';
const hasError = errorCount > 0;

console.log(isTitleCorrect && isHeadingCorrect);
console.log(isTitleCorrect && hasError);
console.log(isTitleCorrect || hasError);
console.log(!hasError);
console.log(isTitleCorrect && isHeadingCorrect && !hasError);

// Trộn && với || thì thêm ngoặc cho rõ
console.log(hasError || (isTitleCorrect && isHeadingCorrect));
