# JavaScript & TypeScript for Tester

Source code dạy học chương JavaScript/TypeScript, mỗi bài một thư mục.

## Chạy trên máy mới

Cần Node.js bản LTS.

```bash
git clone https://github.com/anhtester/js-ts-for-tester.git
cd js-ts-for-tester
npm install
```

Tạo file `.env` từ `.env.example` (PowerShell: `Copy-Item .env.example .env`), dùng cho `bai-01-cai-dat/hello-env.js`.

Chạy từ thư mục gốc, ví dụ:

```bash
node bai-02-bien-kieu-du-lieu/01-bien.js
```

## Nội dung

| Thư mục | Bài |
|---|---|
| `bai-01-cai-dat` | Cài đặt môi trường |
| `bai-02-bien-kieu-du-lieu` | Biến, kiểu dữ liệu và toán tử |
| `bai-03-dieu-kien` | `if...else`, `switch...case` |
| `bai-04-vong-lap-mang` | Vòng lặp và mảng |
| `bai-05-object-json` | Object và JSON |

Từ bài 2, mỗi thư mục có `README.md` ghi thứ tự dạy và file cố ý lỗi.
