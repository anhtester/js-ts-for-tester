# Bài 5: Object và JSON

Chạy từ thư mục gốc `js-ts-for-tester`: `node bai-05-object-json/<tên-file>`
(các file đọc `users.json` dùng đường dẫn tính từ thư mục gốc, chạy từ thư mục khác sẽ lỗi).

| Phần | File | Nội dung |
|---|---|---|
| 1 | `01` đến `04` (`03`, `04` **cố ý lỗi** ở dòng cuối) | Object, `?.`, `??` |
| 2 | `05`, `06` | Duyệt Object, mảng Object |
| 3 | `07`, `08`, `09`, `10` (`09`, `10` **cố ý lỗi**), `11`, `data/users.json` | JSON |
| 4 | `12`, `13`, `14` | Destructuring, `({ page })` |
| 5 | `15`, `16`, `17` | Spread, sao chép nông |
| 6 | `crm-test-data.js` | Thực hành tổng hợp |
| 9 | `bt2-duyet-code.js` | Đề bài tập 2, **cố ý lỗi** |

## Thử thêm khi dạy

- `16`: chạy với `ENV=dev`.
- `crm-test-data.js`: đổi `'admin'` ở bước 2 thành `'guest'` để thấy `TypeError`.

```powershell
$env:ENV = 'dev'
```

## Đáp án

Thư mục `dap-an/` (bài tập 1 có file `users.json` riêng, đã thêm `isActive`).
