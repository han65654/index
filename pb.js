const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

// 미리 추가할 샘플 프로젝트 데이터
const sampleProject = {
  name: "test1_project",
  date: "2023-07-01"
};

// 샘플 프로젝트 추가 함수
function addSampleProject() {
  const { name, date } = sampleProject;

  const project = document.createElement('div');
  project.classList.add('project');
  project.innerHTML = `
    <span class="name">${name}</span>
    <span class="date">${date}</span>
  `;

  // 드래그 앤 드롭 이벤트 처리
  project.draggable = true;
  project.addEventListener('dragstart', dragStart);
  project.addEventListener('dragend', dragEnd);
  // 터치 이벤트 처리
  project.addEventListener('touchstart', touchStart);
  project.addEventListener('touchmove', touchMove);
  project.addEventListener('touchend', touchEnd);
  project.addEventListener('touchcancel', touchCancel);

  projectList.appendChild(project);
}

// 샘플 프로젝트 추가
addSampleProject();

projectForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const date = document.getElementById('date').value;

  if (name && date) {
    const project = document.createElement('div');
    project.classList.add('project');
    project.innerHTML = `
      <span class="name">${name}</span>
      <span class="date">${date}</span>
    `;

    // 드래그 앤 드롭 이벤트 처리
    project.draggable = true;
    project.addEventListener('dragstart', dragStart);
    project.addEventListener('dragend', dragEnd);
    // 터치 이벤트 처리
    project.addEventListener('touchstart', touchStart);
    project.addEventListener('touchmove', touchMove);
    project.addEventListener('touchend', touchEnd);
    project.addEventListener('touchcancel', touchCancel);

    projectList.appendChild(project);

    // 폼 초기화
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
  }
});

const columns = document.querySelectorAll('.column');
let draggedProject = null;

function dragStart(event) {
  draggedProject = this;
  this.classList.add('dragging');
  event.dataTransfer.setData('text/plain', ''); // 드래그 앤 드롭 이벤트에 필요한 데이터 설정
}

function dragEnd() {
  draggedProject = null;
  this.classList.remove('dragging');
}

function touchStart(event) {
  draggedProject = this;
  this.classList.add('dragging');
  const touch = event.touches[0];
  this.setAttribute('data-touch-start-x', touch.clientX);
  this.setAttribute('data-touch-start-y', touch.clientY);
}

function touchMove(event) {
  if (!draggedProject) return;

  const touch = event.touches[0];
  const offsetX = touch.clientX - parseInt(draggedProject.getAttribute('data-touch-start-x'));
  const offsetY = touch.clientY - parseInt(draggedProject.getAttribute('data-touch-start-y'));
  draggedProject.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

function touchEnd(event) {
  if (!draggedProject) return;

  const touch = event.changedTouches[0];
  const dropTarget = document.elementFromPoint(touch.clientX, touch.clientY);
  dropTarget.appendChild(draggedProject);
  draggedProject.style.transform = '';
  draggedProject = null;
}

function touchCancel() {
  if (!draggedProject) return;

  draggedProject.style.transform = '';
  draggedProject.classList.remove('dragging');
  draggedProject = null;
}

columns.forEach(column => {
  column.addEventListener('dragover', dragOver);
  column.addEventListener('dragenter', dragEnter);
  column.addEventListener('dragleave', dragLeave);
  column.addEventListener('drop', drop);
});

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedProject);
}
