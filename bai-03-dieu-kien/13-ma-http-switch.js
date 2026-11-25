const status = 403;

switch (status) {
  case 200:
  case 201:
    console.log(`${status}: thành công`);
    break;
  case 401:
  case 403:
    console.log(`${status}: lỗi đăng nhập hoặc phân quyền`);
    break;
  case 404:
    console.log('404: không tìm thấy');
    break;
  case 500:
    console.log('500: lỗi phía server');
    break;
  default:
    console.log(`${status}: mã chưa phân loại`);
}

// switch so sánh bằng ===: chuỗi '200' không khớp với số 200
const statusText = '200';

switch (statusText) {
  case 200:
    console.log('Khớp case 200');
    break;
  default:
    console.log(`'${statusText}' là chuỗi nên rơi vào default`);
}
