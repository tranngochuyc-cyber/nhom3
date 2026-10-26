# Bài thực hành Tuần 8 — JavaScript Fundamentals

- **Lịch học:** thứ Hai, **26/10/2026**.
- **Môn:** Thiết kế Web, Nhóm 3.
- **Tài liệu gốc:** [Tuần 8 — JavaScript Fundamentals: Tư Duy Logic AI First](https://gamma.app/embed/Tuan-8-JavaScript-Fundamentals-Tu-Duy-Logic-AI-First-hlyckbo7o8y0bsp?mode=doc).
- **Trạng thái đối chiếu:** URL Gamma không cung cấp được toàn văn qua công cụ đọc ngày 26/10. Các hạng mục bên dưới là bài thực hành theo **chủ đề xác định từ tiêu đề**, KHÔNG khẳng định đã khớp từng điều kiện giảng viên.

## Chạy bài

Mở [index.html](index.html) trên GitHub Pages tại `/nhom3/tuan-8/`. Do sử dụng ES modules, **không dùng `file://`**; để chạy tại máy, dùng `python -m http.server 8000` trong thư mục gốc repo và truy cập `http://localhost:8000/tuan-8/`.

Không cần npm hoặc thư viện UI. Danh sách công việc dùng `localStorage` của **trình duyệt người xem**, không gửi dữ liệu lên máy chủ.

## Chia module cụ thể

| Thành viên được giao | Vai trò | Code/đầu ra |
|---|---|---|
| **Trần Ngọc Huy** — Leader | Tư duy logic: kiểu dữ liệu, ép kiểu, điều kiện, hàm, tích hợp trang | `logic.mjs`: `classifyScore()`; tích hợp HTML/CSS và kiểm tra chức năng |
| **Lê Văn Khoa** — Thành viên 1 | Dữ liệu mảng/đối tượng và DOM | `logic.mjs`: `MEMBERS`, `findMembers()`; bộ tìm kiếm ở giao diện |
| **Nguyễn Minh Nhật** — Thành viên 2 | Events, array methods, lưu trữ localStorage | `logic.mjs`: `validateTask()`, `readTasks()`, `taskStats()`; form thêm/sửa trạng thái/xóa trong `app.mjs` |

Các module hiện là **bản code được chuẩn bị bằng công cụ**. Bảng trên chỉ phân trách nhiệm rà soát/hoàn thiện, không xác nhận rằng commit do mỗi bạn tự thực hiện. Khi mỗi người đóng góp hoặc thay đổi thật, hãy dùng tài khoản và email của mình để commit/PR.

## Những yêu cầu kỹ thuật đã triển khai

1. **Logic:** nhận điểm 0–10; phân nhánh qua `if/else`; kiểm tra dữ liệu bất hợp lệ và hiển thị phản hồi.
2. **Array/DOM:** danh sách ba thành viên, tìm kiếm theo chuỗi bằng `filter()`, tái dựng DOM an toàn qua `createElement()` và `textContent`.
3. **Events/Storage:** `submit`, `input`, `change`, `click`; thêm, hoàn thành, xóa việc; xử lý lỗi dữ liệu localStorage.
4. **Accessibility:** nhãn input, `aria-live`, điều hướng bàn phím, breakpoint mobile, vùng bấm phù hợp.
5. **Tests:** `node tuan-8/logic.test.mjs` từ gốc repo; kiểm tra biên số, tìm kiếm và khôi phục dữ liệu.

## Cách nộp / quy trình nhóm

- Nhánh thực hành: `feature/tuan-8-javascript-2026-10-26`; ghi nội dung công việc khi mở PR.
- **Huy:** review phần logic/tích hợp và hồ sơ nộp; **Khoa:** tự kiểm tra/cải thiện bộ lọc DOM; **Nhật:** tự kiểm tra/cải thiện chức năng công việc và lưu trữ.
- Muốn chứng minh phần đóng góp của một thành viên trên GitHub, thành viên đó **phải có thay đổi và commit thực tế bằng tài khoản riêng**. Không gán email hoặc ngày giả cho commit của công cụ.
- Ngày 26/10/2026 là **buổi học Tuần 8**, không có nghĩa mọi công việc của Tuần 1–8 đều đã được hoàn thành đúng lịch.
- Việc đạt W3C/Lighthouse và yêu cầu chi tiết của slide **chưa được chứng nhận** khi chưa kiểm thử và đối chiếu tài liệu toàn văn.
