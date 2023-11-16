const myTodo = [];

function Todo(title, description, dueDate, priorite) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priorite = priorite;
}

function addTodo(title, description, dueDate, priorite) {
  const todo = new Todo(title, description, dueDate, priorite);
  myTodo.push(todo);
}

document.getElementById("newTodo").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priorite = document.getElementById("priorite").value;

  addTodo(title, description, dueDate, priorite);
  displayTodo();
});

function displayTodo() {
  const displayTodo = document.querySelector(".displayTodo");
  displayTodo.innerHTML = "";

  const table = document.createElement("table");
  table.classList.add("todoTable");

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = `
<th>Title</th>
<th>Description</th>
<th>Due Date</th>
<th>Priorite</th>
<th></th>
`;
  table.appendChild(headerRow);

  myTodo.forEach((todo, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${todo.title}</td>
    <td>${todo.description}</td>
    <td>${todo.dueDate}</td>
    <td>${todo.priorite}</td>
    <td>X</td>
    `;
    table.appendChild(row);
  });
  displayTodo.appendChild(table);
}

const openBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const modal = document.querySelector("[data-modal]");

openBtn.addEventListener("click", () => {
  modal.showModal();
});
cancelBtn.addEventListener("click", () => {
  modal.close();
});
modal.addEventListener("click", (e) => {
  const dialogDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    modal.close();
  }
});

// creating projects

const myProjects = [];

function Project(name) {
  this.name = name;
}

function addProject(name) {
  const project = new Project(name);
  myProjects.push(project);
}

document.getElementById("projectForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("projectName").value;
  addProject(name);
  displayProject();
});

function displayProject() {
  const displayProject = document.querySelector(".displayProject");
  displayProject.innerHTML = "";

  myProjects.forEach((project, index) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("projectDiv");
    projectDiv.innerHTML = `
      <p>${project.name}</p>
      <button><span class="mdi mdi-pencil-box-multiple"></span></button>
      <button><span class="mdi mdi-delete"></span></button>
      `;
    displayProject.appendChild(projectDiv);
  });
}
console.log(myProjects);
const projectAddBtn = document.getElementById("projectAddBtn");
const projectModal = document.getElementById("projectModal");
const cancelBtnProject = document.getElementById("cancelBtnProject");

projectAddBtn.addEventListener("click", () => {
  projectModal.showModal();
});

cancelBtnProject.addEventListener("click", () => {
  projectModal.close();
});

projectModal.addEventListener("click", (e) => {
  const dialogDimensions = projectModal.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    projectModal.close();
  }
});
