# Bài 3: Câu lệnh điều kiện if...else và switch...case

Chạy từ thư mục gốc `js-ts-for-tester`: `node bai-03-dieu-kien/<tên-file>`

| Phần | File | Nội dung |
|---|---|---|
| 1 | `01` đến `04` | `if`, `else if`, `else`, thứ tự điều kiện |
| 2 | `05` | Toán tử 3 ngôi |
| 3 | `06`, `07` | Truthy, falsy |
| 4 | `08`, `09` | `\|\|` và `??` |
| 5 | `10`, `11` (**cố ý quên break**), `12`, `13` | `switch...case` |
| 6 | `crm-login-check.js` | Thực hành tổng hợp |
| 9 | `bt3-duyet-code.js` | Đề bài tập 3, **cố ý sai** |

## Giá trị cần đổi khi dạy

- `01`: đổi `mauDen` thành `'tím'` để vào nhánh `else`.
- `02`: đổi `actualTitle` thành `... - Dashboard` để thấy FAIL.
- `03`: đổi `status` thành 200, 401, 503, 302.

## Biến môi trường (PowerShell)

```powershell
$env:ADMIN_EMAIL = 'admin@example.com'
$env:BASE_URL = 'https://staging.crm.example.com'
$env:ENV = 'staging'
```

Xoá sau khi thử: `Remove-Item Env:ENV, Env:BASE_URL, Env:ADMIN_EMAIL`

## Đáp án

Thư mục `dap-an/`. Bài tập 2 chạy với `ENV=staging`.
