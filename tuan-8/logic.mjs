// Các hàm thuần, có thể kiểm thử bằng Node.js mà không cần trình duyệt.
export const MEMBERS = Object.freeze([
  { name: "Trần Ngọc Huy", role: "Trưởng nhóm", task: "Logic, hàm, tích hợp website" },
  { name: "Lê Văn Khoa", role: "Thành viên 1", task: "Mảng, DOM, thiết kế nội dung" },
  { name: "Nguyễn Minh Nhật", role: "Thành viên 2", task: "Sự kiện, responsive, tương tác" },
]);

export function classifyScore(input) {
  const value = typeof input === "string" ? input.trim() : input;
  if (value === "" || value === null || value === undefined) return { ok: false, message: "Vui lòng nhập điểm." };
  const score = Number(value);
  if (!Number.isFinite(score) || score < 0 || score > 10) {
    return { ok: false, message: "Điểm phải là một số từ 0 đến 10." };
  }
  let category;
  if (score >= 8) category = "Giỏi";
  else if (score >= 6.5) category = "Khá";
  else if (score >= 5) category = "Đạt";
  else category = "Cần cố gắng";
  return { ok: true, score, category, passed: score >= 5 };
}

export function findMembers(query, members = MEMBERS) {
  const term = String(query ?? "").trim().toLocaleLowerCase("vi");
  if (!term) return [...members];
  return members.filter(({ name, role, task }) =>
    [name, role, task].some(value => value.toLocaleLowerCase("vi").includes(term)));
}

export function validateTask(text) {
  const value = String(text ?? "").trim();
  if (!value) return { ok: false, message: "Nhập nội dung công việc trước khi thêm." };
  if (value.length > 100) return { ok: false, message: "Tối đa 100 ký tự cho một công việc." };
  return { ok: true, value };
}

export function readTasks(raw) {
  try {
    const list = JSON.parse(raw);
    if (!Array.isArray(list)) return [];
    return list.filter(item => item && typeof item.id === "string" &&
      typeof item.text === "string" && item.text.length <= 100 &&
      typeof item.done === "boolean").slice(0, 100);
  } catch {
    return [];
  }
}

export function taskStats(tasks) {
  return { all: tasks.length, done: tasks.filter(item => item.done).length };
}
