# PHÂN CÔNG 6 TUẦN — NHÓM 3

**Trạng thái:** kế hoạch và đầu việc tạo ngày 26/10/2026, **không phải** bài đã hoàn thành tại các ngày học trước.

## Nguyên tắc

1. Đọc lần lượt mục tương ứng ở `phan-cong/tuan-01.md` … `tuan-06.md`; mỗi người có **một sản phẩm mã nguồn hoặc báo cáo thật ở từng buổi** và commit trên nhánh riêng.
2. Tên chủ đề được suy ra từ **tiêu đề URL Gamma do nhóm gửi**; hiện chưa thể truy xuất toàn văn bên trong Gamma. Do đó phải đối chiếu lại tiêu chí chính xác trước khi tuyên bố đạt bài.
3. Các ngày 07/09, 14/09, 21/09, 28/09, 05/10, 12/10 là **mốc buổi học**, không phải ngày được phép viết ngược vào commit mới. Bỏ 19/10, 26/10.
4. Nhiệm vụ được phân theo thế mạnh/vai trò đã mô tả trong README: **Huy tích hợp**, **Khoa nội dung/UI**, **Nhật responsive/tương tác**. Không để ba người cùng sửa một file trong lúc làm độc lập.
5. Mỗi nhiệm vụ chỉ hoàn thành khi thành viên thực hiện/chỉnh sửa và **tự commit bằng email GitHub đã xác minh**; bản soạn sẵn bởi ChatGPT/Codex là khung giao việc, **không được giả là commit tự tay sinh viên đã làm trước đây**.
6. Bài tập và bản lưu trong nhánh `ho-so-6-tuan` hoặc nhánh cá nhân; **website cuối Tuần 6 trên `main` giữ nguyên**. Mọi thay đổi vào main cần review để không làm mất site.

## Tài khoản và nhánh nhận việc

| Thành viên | Email đã từng xuất hiện trong Git | Nhánh làm việc | Phụ trách |
|---|---|---|---|
| Trần Ngọc Huy | `tranngochuyc@gmail.com` | `bai-tap/huy-6-tuan` | Trưởng nhóm — cấu trúc, tích hợp, phát hành |
| Lê Văn Khoa | `khoa44905@gmail.com` | `bai-tap/khoa-6-tuan` | Thành viên — nội dung, typography, components |
| Nguyễn Minh Nhật | `nhatlatao01@gmail.com` | `bai-tap/nhat-6-tuan` | Thành viên — giao diện, responsive, tương tác |

## 18 sản phẩm riêng (mỗi người 1 sản phẩm/tuần)

| Buổi học | Huy | Khoa | Nhật |
|---|---|---|---|
| 01 — 07/09/2026 | `bai-lam/tuan-01/huy/README.md` | `bai-lam/tuan-01/khoa/noi-dung.md` | `bai-lam/tuan-01/nhat/wireframe.md` |
| 02 — 14/09/2026 | `bai-lam/tuan-02/huy/index.html` | `bai-lam/tuan-02/khoa/about.html` | `bai-lam/tuan-02/nhat/nhat.html` |
| 03 — 21/09/2026 | `bai-lam/tuan-03/huy/layout.css` | `bai-lam/tuan-03/khoa/components.css` | `bai-lam/tuan-03/nhat/flex.css` |
| 04 — 28/09/2026 | `bai-lam/tuan-04/huy/responsive-layout.css` | `bai-lam/tuan-04/khoa/design-system.css` | `bai-lam/tuan-04/nhat/mobile-fixes.css` |
| 05 — 05/10/2026 | `bai-lam/tuan-05/huy/menu.js` | `bai-lam/tuan-05/khoa/hover.css` | `bai-lam/tuan-05/nhat/motion.css` |
| 06 — 12/10/2026 | `bai-lam/tuan-06/huy/tich-hop.md` | `bai-lam/tuan-06/khoa/khoa.html` | `bai-lam/tuan-06/nhat/nhat.html` |

## Tài liệu chi tiết

- [Buổi 1 — Nhập môn hệ sinh thái AI & Web Development](phan-cong/tuan-01.md)
- [Buổi 2 — Tư duy Semantic HTML5 – Cấu trúc web hệ thống](phan-cong/tuan-02.md)
- [Buổi 3 — CSS Layout System – Grid và Flexbox](phan-cong/tuan-03.md)
- [Buổi 4 — Design System và tư duy Responsive](phan-cong/tuan-04.md)
- [Buổi 5 — Hiệu ứng chuyển động – Thư viện hiệu ứng](phan-cong/tuan-05.md)
- [Buổi 6 — Hoàn thiện giao diện – Tối ưu hóa sản phẩm](phan-cong/tuan-06.md)

## Cách nộp minh chứng

- Mỗi thành viên tạo/chỉnh file đúng đường dẫn của mình, *không commit trống* hoặc chỉ tạo README cho đủ số lượng.
- Với tuần cũ: mô tả rõ 'bổ sung bài thực hành cho buổi học DD/MM, commit thực tế ngày ...'. Đừng gán ngày quá khứ.
- Thêm link commit, PR, ảnh kiểm tra (nếu có) vào bảng trong [HO_SO_6_TUAN.md](HO_SO_6_TUAN.md) khi có bằng chứng thật.
- Nộp PR hướng vào `ho-so-6-tuan`; chỉ đề xuất vào `main` khi cần cập nhật website sản phẩm.
- Xem [hướng dẫn Git & commit cho 3 người](phan-cong/HUONG_DAN_COMMIT.md).

## Trạng thái xác thực

Không có sáu commit mỗi email trong quá khứ. Đến ngày lập kế hoạch, Git chỉ chứng thực một số mốc thực tế (xem `HO_SO_6_TUAN.md`). Những commit chuẩn bị kế hoạch do trợ lý tạo **mang tác giả công cụ**, không phải thành viên.
