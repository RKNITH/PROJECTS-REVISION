// Initialize tasks array
let tasks = [];

// Add task to the list
function addTask() {
    const taskInput = document.getElementById('task').value.trim();
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    if (taskInput && dueDate) {
        const task = {
            title: taskInput,
            dueDate: dueDate,
            priority: priority,
            status: 'Not Started'
        };
        tasks.push(task);
        renderTasks();
        clearInputFields();
    }
}

// Clear input fields after adding a task
function clearInputFields() {
    document.getElementById('task').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'low';
}

// Render tasks on the page
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous list

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <div>
                    <strong>${task.title}</strong>
                    <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
                </div>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task by index
    renderTasks();
}

// Search tasks
function searchTask() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchInput));

    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear previous list

    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <div>
                    <strong>${task.title}</strong>
                    <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
                </div>
                <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Initial render
renderTasks();
