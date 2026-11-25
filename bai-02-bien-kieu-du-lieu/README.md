# Bài 2: Biến, kiểu dữ liệu và toán tử trong JavaScript

Chạy từ thư mục gốc `js-ts-for-tester`, dạng: `node bai-02-bien-kieu-du-lieu/<tên-file>`

## Thứ tự dạy

| Phần | File | Nội dung |
|---|---|---|
| 1 | `retry.js`, `retry.ts` | Vì sao học JavaScript trước TypeScript (`retry.ts` cố ý bị VS Code gạch đỏ ở dòng 2) |
| 2 | `00-thong-tin-nguoi.js`, `01-bien.js` | Biến, `const`, `let` |
| 2 | `02-loi-const.js`, `03-loi-chua-khai-bao.js` | **Cố ý lỗi**: `TypeError`, `ReferenceError` |
| 3 | `04-kieu-du-lieu.js` | 5 kiểu dữ liệu, `typeof` |
| 3 | `05-template-literal.js`, `06-ghep-url.js` | Template literal, ghép URL |
| 3 | `07-bien-moi-truong.js` | `process.env`, `undefined` |
| 4 | `08-lam-sach-chuoi.js`, `09-ham-chuoi.js`, `10-replace.js` | Làm sạch chuỗi |
| 4 | `11-doi-ra-so.js`, `12-number-parsefloat.js` | `Number()`, `parseFloat()` |
| 5 | `13-toan-tu-doi-thuong.js`, `14-tinh-tien-don-hang.js`, `15-cong-chuoi-so.js` | Toán tử số học, gán |
| 5 | `16-so-sanh-doi-thuong.js`, `17-so-sanh.js`, `18-so-sanh-chuoi-so.js` | `==` và `===` |
| 5 | `19-logic-doi-thuong.js`, `20-logic-kiem-tra-trang.js` | `&&`, `\|\|`, `!` |
| 6 | `crm-login-data.js` | Thực hành tổng hợp (bài sau dùng tiếp) |
| 9 | `bt4-duyet-code.js` | Đề bài tập 4, **cố ý lỗi** ở dòng 11 |

## Đặt biến môi trường (dùng cho `07` và `crm-login-data.js`)

Windows PowerShell:

```powershell
$env:ADMIN_EMAIL = 'admin@example.com'
```

macOS / Linux / Git Bash:

```bash
ADMIN_EMAIL=admin@example.com node bai-02-bien-kieu-du-lieu/07-bien-moi-truong.js
```

Muốn chạy lại ca "chưa đặt biến" trong PowerShell:

```powershell
Remove-Item Env:ADMIN_EMAIL
```

## Đáp án bài tập

Thư mục `dap-an/`. Ẩn hoặc không chia sẻ thư mục này nếu muốn học viên tự làm trước.
