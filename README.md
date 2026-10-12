# Portfolio — Tuần 6

Website tiếp tục bài thực hành CSS Layout System Tuần 3. Bố cục chính vẫn dùng CSS Grid (sidebar và main tỉ lệ 1:3); điều hướng và danh sách kỹ năng vẫn dùng Flexbox. Tuần 6 tập trung rà soát giao diện, tương thích di động, dọn CSS và cải thiện trải nghiệm.

## Thành viên

| Họ và tên | MSSV | Vai trò ghi trong bài gốc |
|---|---:|---|
| Trần Ngọc Huy | 125001758 | Trưởng nhóm, HTML/CSS và tổng hợp |
| Lê Văn Khoa | 125001668 | Hỗ trợ nội dung và bố cục |
| Nguyễn Minh Nhật | 125001448 | Hỗ trợ giao diện và responsive |

## Xem sản phẩm

Mở `index.html` bằng trình duyệt. Trang không cần bước cài đặt hay dịch vụ ngoài. Gồm giới thiệu, kỹ năng, dự án, thành viên và biểu mẫu soạn nội dung liên hệ. Biểu mẫu **chưa gửi email**; nút chỉ sao chép nội dung sau khi kiểm tra các trường bắt buộc.

## Design system

- Màu chính `#173f73`, màu nhấn `#2563eb`, chữ `#1f2937`; nền sáng giúp dễ đọc.
- Chữ dùng Arial/Helvetica với phông dự phòng của hệ điều hành để hiển thị tiếng Việt.
- Khoảng cách chính 20px; thẻ bo góc 10–14px.
- Khung desktop dùng Grid, thẻ dự án và thành viên dùng Grid; điều hướng, kỹ năng và biểu mẫu dùng Flexbox.
- Ở màn hình hẹp, nội dung về một cột. Menu mở bằng nút có trạng thái `aria-expanded`; nếu JavaScript bị tắt, các liên kết vẫn hiển thị.
- Hiệu ứng nhấc thẻ 0,2 giây; `prefers-reduced-motion` loại bỏ chuyển động cho người dùng có thiết lập này.

## Đối chiếu yêu cầu Tuần 6

| Tiêu chí | Kết quả trong repo |
|---|---|
| Rà soát tương thích màn hình | CSS cho desktop, tablet và mobile; cần kiểm tra trên thiết bị thật trước khi chấm |
| CSS refactoring | Có biến màu/khoảng cách; giữ cấu trúc bài Tuần 3 |
| W3C Validation | HTML có ngôn ngữ, nhãn biểu mẫu, thuộc tính hợp lệ; chưa có kết quả xác nhận từ validator.w3.org |
| Điều hướng | Liên kết đến các mục có nội dung; menu mobile có thể mở/đóng |
| Ảnh WebP | Trang không có ảnh raster nên không có ảnh cần chuyển sang WebP |
| Lighthouse ≥ 80, cải thiện ≥ 10 điểm | Chưa đo trên môi trường trình duyệt chuẩn; không công bố điểm giả |
| Hiệu ứng và khả năng tiếp cận | Hover/focus, skip link, giảm chuyển động, vùng chạm menu 44px |
| Git ≥ 10 commit từ các thành viên | Xem lịch sử GitHub; số commit/đóng góp từng người cần xác nhận bằng Insights |
| Index hub của 6 bài thực hành | Repo hiện chỉ chứa portfolio này; chưa có đủ 6 sản phẩm để tạo liên kết hoạt động |

## Cấu trúc

```text
index.html      Nội dung portfolio
style.css       Bố cục và giao diện
script.js       Menu di động và sao chép biểu mẫu
favicon.svg     Biểu tượng tab
prompt_log.md   Lịch sử prompt của bài trước
```

Các file ZIP là bản lưu cũ của nhóm; website chạy từ các file nguồn ở thư mục gốc.
