const status = 404; // mã HTTP mà server trả về

if (status === 200) {
  console.log('200: thành công');
} else if (status === 401) {
  console.log('401: chưa đăng nhập hoặc phiên đã hết hạn');
} else if (status === 403) {
  console.log('403: đã đăng nhập nhưng không có quyền');
} else if (status === 404) {
  console.log('404: không tìm thấy trang hoặc dữ liệu');
} else if (status >= 500) {
  console.log(`${status}: lỗi phía server, ghi lại để báo bug`);
} else {
  console.log(`${status}: mã chưa phân loại, cần xem thêm`);
}
