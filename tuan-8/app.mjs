import { MEMBERS, classifyScore, findMembers, validateTask, readTasks, taskStats } from "./logic.mjs";

const scoreForm = document.getElementById("score-form");
scoreForm.addEventListener("submit", event => {
  event.preventDefault();
  const result = classifyScore(document.getElementById("score-input").value);
  const title = document.getElementById("score-result");
  const detail = document.getElementById("score-detail");
  title.textContent = result.ok ? result.category : "Dữ liệu chưa hợp lệ";
  detail.textContent = result.ok
    ? `Điểm ${result.score}/10 · ${result.passed ? "Đạt ngưỡng 5 điểm" : "Dưới ngưỡng 5 điểm"}.`
    : result.message;
});

const teamSearch = document.getElementById("team-search");
const teamList = document.getElementById("team-list");
const teamCount = document.getElementById("team-count");
function renderMembers() {
  const found = findMembers(teamSearch.value);
  teamList.replaceChildren();
  for (const person of found) {
    const item = document.createElement("li");
    item.className = "team-card";
    const role = document.createElement("span");
    const name = document.createElement("strong");
    const task = document.createElement("p");
    role.textContent = person.role;
    name.textContent = person.name;
    task.textContent = person.task;
    item.append(role, name, task);
    teamList.append(item);
  }
  if (found.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty-item";
    empty.textContent = "Không tìm thấy thành viên phù hợp.";
    teamList.append(empty);
  }
  teamCount.textContent = `${found.length}/${MEMBERS.length} thành viên khớp với từ khóa`;
}
teamSearch.addEventListener("input", renderMembers);

const STORAGE_KEY = "nhom3-week8-tasks-v1";
const starter = [
  { id: "lesson-variables", text: "Ôn let, const và kiểu dữ liệu", done: false },
  { id: "lesson-conditions", text: "Thực hành if / else và hàm", done: false },
  { id: "lesson-events", text: "Viết sự kiện click và cập nhật DOM", done: false },
];
function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw === null ? starter.map(item => ({ ...item })) : readTasks(raw);
  } catch {
    return starter.map(item => ({ ...item }));
  }
}
let tasks = loadSaved();
let nextId = 0;
const taskList = document.getElementById("task-list");
const taskCount = document.getElementById("task-count");
const taskFeedback = document.getElementById("task-feedback");
function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    taskFeedback.textContent = "Đã lưu trong trình duyệt trên thiết bị này.";
  } catch {
    taskFeedback.textContent = "Trình duyệt không cho phép lưu: dữ liệu chỉ tồn tại trong phiên đang mở.";
  }
}
function renderTasks() {
  taskList.replaceChildren();
  taskCount.textContent = `${taskStats(tasks).done}/${taskStats(tasks).all} hoàn thành`;
  if (!tasks.length) {
    const empty = document.createElement("li");
    empty.className = "empty-item";
    empty.textContent = "Chưa có công việc. Hãy thêm một việc để thử JavaScript.";
    taskList.append(empty);
    return;
  }
  for (const item of tasks) {
    const li = document.createElement("li");
    li.className = "task-item" + (item.done ? " is-done" : "");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = item.done;
    const id = "task-" + item.id;
    checkbox.id = id;
    checkbox.setAttribute("aria-label", "Đánh dấu " + item.text);
    checkbox.addEventListener("change", () => {
      tasks = tasks.map(task => task.id === item.id ? { ...task, done: checkbox.checked } : task);
      saveTasks();
      renderTasks();
    });
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = item.text;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "delete-button";
    remove.textContent = "Xóa";
    remove.setAttribute("aria-label", "Xóa " + item.text);
    remove.addEventListener("click", () => {
      tasks = tasks.filter(task => task.id !== item.id);
      saveTasks();
      renderTasks();
    });
    li.append(checkbox, label, remove);
    taskList.append(li);
  }
}
document.getElementById("task-form").addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("task-input");
  const valid = validateTask(input.value);
  if (!valid.ok) {
    taskFeedback.textContent = valid.message;
    input.focus();
    return;
  }
  if (tasks.length >= 100) {
    taskFeedback.textContent = "Danh sách tối đa 100 công việc.";
    return;
  }
  const id = (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function")
    ? crypto.randomUUID() : String(Date.now()) + "-" + String(++nextId);
  tasks = [...tasks, { id, text: valid.value, done: false }];
  input.value = "";
  saveTasks();
  renderTasks();
  input.focus();
});
document.getElementById("clear-done").addEventListener("click", () => {
  tasks = tasks.filter(item => !item.done);
  saveTasks();
  renderTasks();
});
renderTasks();
