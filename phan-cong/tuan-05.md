# Buổi 5: Hiệu ứng chuyển động – Thư viện hiệu ứng

**Ngày thứ Hai theo lịch:** 05/10/2026 (không có nghĩa đây là ngày commit thực tế).
**Tài liệu giảng viên:** https://gamma.app/embed/Tuan-5-Hieu-Ung-Chuyen-ong-Thu-Vien-Hieu-Ung-wqvzn0x5rsycpve?mode=doc

> Tình trạng: bản phân công dựa trên tên chủ đề và code Git có sẵn. Nội dung bên trong Gamma chưa truy cập được; cần kiểm tra lại các tiêu chí cụ thể.

## Phân công và điều kiện hoàn thành

### Trần Ngọc Huy — Trưởng nhóm — cấu trúc, tích hợp, phát hành
- **Nhiệm vụ:** Tạo tương tác menu có kiểm soát bằng JavaScript.
- **File làm việc:** `bai-lam/tuan-05/huy/menu.js`.
- **Tiêu chí nhận:** Menu mở/đóng, cập nhật aria-expanded, tắt JS không làm mất liên kết điều hướng.
- **Thao tác khi hoàn thành:** tự chỉnh code/nội dung, mở trên trình duyệt (nếu có HTML/CSS/JS), commit trên nhánh `bai-tap/huy-6-tuan` bằng email `tranngochuyc@gmail.com`, đẩy nhánh và tạo PR vào `ho-so-6-tuan`.
- **Trạng thái:** [ ] Chưa xác minh công việc cho riêng buổi này.

### Lê Văn Khoa — Thành viên — nội dung, typography, components
- **Nhiệm vụ:** Tạo micro-interaction nhẹ cho nút và thẻ nội dung.
- **File làm việc:** `bai-lam/tuan-05/khoa/hover.css`.
- **Tiêu chí nhận:** Chuyển động opacity/transform không gây layout shift, có focus-visible.
- **Thao tác khi hoàn thành:** tự chỉnh code/nội dung, mở trên trình duyệt (nếu có HTML/CSS/JS), commit trên nhánh `bai-tap/khoa-6-tuan` bằng email `khoa44905@gmail.com`, đẩy nhánh và tạo PR vào `ho-so-6-tuan`.
- **Trạng thái:** [ ] Chưa xác minh công việc cho riêng buổi này.

### Nguyễn Minh Nhật — Thành viên — giao diện, responsive, tương tác
- **Nhiệm vụ:** Thiết kế hiệu ứng xuất hiện và tôn trọng reduced motion.
- **File làm việc:** `bai-lam/tuan-05/nhat/motion.css`.
- **Tiêu chí nhận:** Có animation nhỏ, prefers-reduced-motion: reduce và fallback khi JS không tải.
- **Thao tác khi hoàn thành:** tự chỉnh code/nội dung, mở trên trình duyệt (nếu có HTML/CSS/JS), commit trên nhánh `bai-tap/nhat-6-tuan` bằng email `nhatlatao01@gmail.com`, đẩy nhánh và tạo PR vào `ho-so-6-tuan`.
- **Trạng thái:** [ ] Chưa xác minh công việc cho riêng buổi này.

## Bằng chứng và dữ liệu cần kế thừa

[PR #9](https://github.com/tranngochuyc-cyber/nhom3/pull/9), [commit 05/10](https://github.com/tranngochuyc-cyber/nhom3/commit/5c3f03c02f9b35d1ea94a42b22ac70c8d3430687); ZIP Tuần 5 ở nhánh hồ sơ.

## Yêu cầu phối hợp

- Các thành viên chỉ sửa phần thuộc mình trước để giảm xung đột.
- Huy tổng hợp các phần code đã được nhóm review và giải thích nếu không dùng phần nào.
- Giữ sản phẩm hiện tại trên `main` làm bản kết thúc Tuần 6.
- Nộp bổ sung hiện nay thì dùng giờ commit thật, không ngụy tạo ngày học.
