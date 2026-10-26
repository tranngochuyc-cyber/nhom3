# HƯỚNG DẪN COMMIT THẬT — 3 THÀNH VIÊN

**Mục tiêu:** mỗi thành viên tự đưa lên ít nhất một sản phẩm thực sự chỉnh sửa/kiểm tra cho từng bài. Đây là **bài bổ sung hiện tại cho lịch học cũ**, không phải cách tạo chứng cứ commit trong quá khứ.

## Chuẩn bị (Windows PowerShell trong thư mục làm việc của bạn)

```powershell
git clone https://github.com/tranngochuyc-cyber/nhom3.git
cd nhom3
git fetch origin
```

> Nếu đã có repo, chỉ cần mở PowerShell ngay trong thư mục `nhom3` và chạy `git fetch origin`.

## Nhận nhánh riêng

**Huy**:

```powershell
git switch --track origin/bai-tap/huy-6-tuan
git config user.name "Tran Ngoc Huy"
git config user.email "tranngochuyc@gmail.com"
```

**Khoa**:

```powershell
git switch --track origin/bai-tap/khoa-6-tuan
git config user.name "Le Van Khoa"
git config user.email "khoa44905@gmail.com"
```

**Nhật**:

```powershell
git switch --track origin/bai-tap/nhat-6-tuan
git config user.name "Nguyen Minh Nhat"
git config user.email "nhatlatao01@gmail.com"
```

Email cần được xác minh trong GitHub của đúng thành viên. Việc tự đặt email trong Git không chứng minh danh tính; tốt nhất mỗi người tự dùng token/SSH của tài khoản riêng và tự push.

## Cho từng tuần

1. Mở `phan-cong/tuan-0X.md`, thực hiện yêu cầu ở phần mang tên mình; tạo file tại đường dẫn được chỉ định (ví dụ `bai-lam/tuan-03/khoa/components.css`).
2. Nội dung phải có thay đổi thật, chạy/thử được khi là mã nguồn. Không commit file rỗng hoặc đổi một dấu cách cho đủ lượt.
3. Dùng lệnh dưới đây thay đúng đường dẫn và số tuần:

```powershell
git add bai-lam/tuan-03/khoa/components.css
git commit -m "feat(tuan-03): Khoa hoan thien CSS components"
git push -u origin bai-tap/khoa-6-tuan
```

4. Tạo PR từ nhánh cá nhân vào nhánh `ho-so-6-tuan`. Nếu đang dùng GitHub web, vào nhánh, chọn **Add file → Create new file**, viết đúng đường dẫn, nội dung mã thật và **Commit changes** từ tài khoản cá nhân.
5. Tiếp tục tuần kế tiếp, có thể có nhiều commit mỗi tuần nhưng ít nhất **một commit có nội dung đáng kể** cho mỗi người.

## Lưu ý ngày Git

- Không tự đặt `GIT_AUTHOR_DATE`, `GIT_COMMITTER_DATE` hoặc `git commit --date` về các ngày đã qua để giả lịch sử.
- GitHub hiển thị **ngày commit mới thực tế**. Ngày ghi trong README chỉ là ngày buổi học được phân công.
- Commit đã có metadata tác giả do công cụ tự động tạo vẫn giữ nguyên nguồn gốc lịch sử. Chỉ chuyển Author sang thành viên nếu người đó thực sự là tác giả nội dung và có bằng chứng xác nhận.
- Các phần việc mới do trợ lý phác thảo không được tính là đóng góp đã hoàn thành của các sinh viên.

## Giữ website Tuần 6

Không merge bừa `ho-so-6-tuan` hay các thư mục `bai-lam` vào `main`. `main` giữ website Portfolio Tuần 6; PR lưu bài tập đưa vào nhánh `ho-so-6-tuan`. Muốn sửa web hiện tại thì chỉ PR các file có thay đổi cần thiết sau khi nhóm xem lại.
