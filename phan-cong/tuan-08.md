# PHÂN CÔNG TUẦN 8 — Thứ Hai, 26/10/2026

**Chủ đề gốc:** [JavaScript Fundamentals — Tư Duy Logic AI First](https://gamma.app/embed/Tuan-8-JavaScript-Fundamentals-Tu-Duy-Logic-AI-First-hlyckbo7o8y0bsp?mode=doc)

> Tài liệu Gamma không đọc được nội dung chi tiết từ trình truy cập. Đây là **bản bài thực hành và phân công đề xuất theo chủ đề**, chưa phải checklist chính thức của thầy cô. Không coi ngày 26/10 là ngày đã có commit của tất cả thành viên nếu Git không xác nhận.

| Người | Email GitHub | Việc thực hiện / kiểm tra | File thuộc phạm vi |
|---|---|---|---|
| **Huy (Leader)** | `tranngochuyc@gmail.com` | Phần 1: biến, hàm, điều kiện; kiểm soát điểm đầu vào; tích hợp giao diện và kiểm tra kết quả | `tuan-8/index.html`, `tuan-8/logic.mjs`, `tuan-8/README.md`, bài test |
| **Khoa (Member 1)** | `khoa44905@gmail.com` | Phần 2: danh sách thành viên dùng Array/Object, `filter()`, hiển thị `textContent`, rỗng khi không tìm thấy | `tuan-8/logic.mjs` (`findMembers`), `tuan-8/app.mjs` (`renderMembers`) |
| **Nhật (Member 2)** | `nhatlatao01@gmail.com` | Phần 3: thêm việc, đánh dấu hoàn thành, xóa, giữ danh sách localStorage, xử lý dữ liệu rỗng/bất hợp lệ | `tuan-8/logic.mjs` (`validateTask/readTasks`), `tuan-8/app.mjs` (quản lý sự kiện) |

## Luồng làm việc và tiêu chí nhận

- Code hiện được chuẩn bị trước để nhóm kiểm tra; **không tính là commit cá nhân** cho đến khi có đóng góp và commit thật.
- Thành viên làm/chỉnh nhánh riêng, mở PR vào nhánh tích hợp; thành viên khác review; Huy quyết định gộp.
- **Huy:** điểm biên -1/0/4.9/5/6.5/8/10/11 được xử lý hợp lý; nhập sai có phản hồi.
- **Khoa:** tìm theo tên hoặc nhiệm vụ; xử lý không có kết quả; dùng `textContent` không chèn HTML người nhập.
- **Nhật:** thêm, toggle, xóa, dọn việc hoàn thành; reload vẫn giữ việc khi localStorage hoạt động; nhập rỗng bị từ chối.
- Sản phẩm hiển thị: `https://tranngochuyc-cyber.github.io/nhom3/tuan-8/` sau khi merge và Pages cập nhật.
- Cách kiểm thử logic: `node tuan-8/logic.test.mjs`.

## Việc còn cần xác minh

- [ ] Đối chiếu **toàn văn slide Gamma Tuần 8**.
- [ ] Khoa và Nhật review/chỉnh và commit bằng tài khoản thật nếu muốn được GitHub ghi nhận đóng góp.
- [ ] Kiểm thử thực tế trên Chrome/Firefox/mobile và W3C nếu nộp chính thức.
