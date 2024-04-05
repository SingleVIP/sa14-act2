const taskForm = document.getElementById('taskForm');
const taskTitleInput = document.getElementById('taskTitle');
const taskDetailsInput = document.getElementById('taskDetails');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskTitle = taskTitleInput.value.trim();
    const taskDetails = taskDetailsInput.value.trim();

    if (taskTitle === '') {
        alert('Please enter a task title');
        return;
    }

    const task = document.createElement('li');
    task.innerHTML = `<strong>${taskTitle}</strong>`;

    if (taskDetails !== '') {
        task.innerHTML += ` - ${taskDetails}`;
    }

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(task, taskTitle, taskDetails);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => task.remove();

    task.appendChild(editButton);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    taskTitleInput.value = '';
    taskDetailsInput.value = '';
}

function editTask(task, title, details) {
    const newTitle = prompt('Enter new title:', title);
    if (newTitle === null) {
        return; // If user cancels
    }
    const newDetails = prompt('Enter new details:', details);
    task.innerHTML = `<strong>${newTitle}</strong>`;
    if (newDetails !== '') {
        task.innerHTML += ` - ${newDetails}`;
    }
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = () => editTask(task, newTitle, newDetails);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = () => task.remove();

    task.appendChild(editButton);
    task.appendChild(deleteButton);
}
