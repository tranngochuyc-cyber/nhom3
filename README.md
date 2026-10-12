# Portfolio — Tuần 6

Website bốn trang của Nhóm 3 trong bài thực hành Thiết kế Web. Trang chủ giới thiệu nhóm; ba trang còn lại giới thiệu từng thành viên và phần việc của họ. Nội dung được đối chiếu với README và lịch sử repository trước khi viết lại, không tự thêm thành tích cá nhân.

**Xem website:** [Portfolio Nhóm 3 trên GitHub Pages](https://tranngochuyc-cyber.github.io/nhom3/)

## Các trang

| Trang | Nội dung |
|---|---|
| [index.html](index.html) | Giới thiệu Nhóm 3, ba thành viên, quá trình học và nội dung Tuần 6 |
| [huy.html](huy.html) | Trần Ngọc Huy — MSSV 125001758, trưởng nhóm |
| [khoa.html](khoa.html) | Lê Văn Khoa — MSSV 125001668, hỗ trợ nội dung và bố cục |
| [nhat.html](nhat.html) | Nguyễn Minh Nhật — MSSV 125001448, hỗ trợ giao diện và responsive |

Mỗi trang cá nhân trình bày theo ba phần: **Vai trò**, **Phần phụ trách**, **Việc cần làm**. Danh sách việc cần làm là kế hoạch kiểm tra Tuần 6, chưa được tính là kết quả đã hoàn thành.

## Ảnh thành viên

- `assets/nhat.png`: ảnh 1 do người dùng cung cấp, đặt cho Nguyễn Minh Nhật.
- `assets/huy.jpg`: ảnh 2 do người dùng cung cấp, ảnh mèo làm đại diện cho Trần Ngọc Huy.
- `assets/khoa.png`: ảnh 3 do người dùng cung cấp, đặt cho Lê Văn Khoa.

## Sản phẩm hiển thị trên trang nhóm

Trang chủ liên kết đến website bốn trang hiện tại, mã nguồn bài CSS Grid/Flexbox Tuần 3 ở commit `1eaa0d9`, và hai bản HTML cá nhân trong nhánh `Khoa_Le` và `nhat-portfolio`. Các bản HTML cá nhân được ghi là bản phác thảo học tập, không được trình bày như sản phẩm đã triển khai.

Mở `index.html` bằng trình duyệt để xem. Các liên kết dùng đường dẫn tương đối, nên bốn trang hoạt động khi mở trực tiếp hoặc đăng lên một máy chủ tĩnh. Không cần cài thư viện hay đăng nhập. `style.css` dùng chung cho toàn bộ trang; `script.js` chỉ điều khiển menu trên màn hình nhỏ. Nếu JavaScript tắt, các liên kết vẫn hiển thị.

## Phạm vi Tuần 6

- HTML có cấu trúc, CSS Grid và Flexbox, media query và JavaScript thao tác DOM cơ bản.
- Điều hướng giữa bốn trang; menu điện thoại có thể mở và đóng, có `aria-expanded`.
- Typography tiếng Việt dùng Arial và phông dự phòng; nội dung tối thiểu 15px ở di động.
- Hiệu ứng hover ngắn, tuân theo `prefers-reduced-motion`.
- Trang không dùng ảnh raster nên không cần chuyển ảnh sang WebP.
- Chưa công bố điểm Lighthouse hay kết quả W3C Validator nếu chưa có báo cáo đo thực tế.
- Repo chưa chứa đủ sáu bài thực hành riêng nên không tạo liên kết giả cho index hub sáu bài.

## Nội dung và giới hạn

Thông tin tên, mã sinh viên và vai trò dựa trên tài liệu nhóm đã có. Các thẻ “nội dung học tập” mô tả phần việc trong bài, không phải tuyên bố mức độ thành thạo. Nhóm có thể tự bổ sung thông tin cá nhân, ảnh và dự án thực tế sau khi từng thành viên xác nhận.

Website không có biểu mẫu gửi thư hay dịch vụ bên ngoài. Các tệp ZIP trong repository là bản lưu cũ, không cần cho website hiện tại.
