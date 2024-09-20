// // Initialize tasks array
// let tasks = [];

// // Add task to the list
// function addTask() {
//     const taskInput = document.getElementById('task').value.trim();
//     const dueDate = document.getElementById('dueDate').value;
//     const priority = document.getElementById('priority').value;

//     if (taskInput && dueDate) {
//         const task = {
//             title: taskInput,
//             dueDate: dueDate,
//             priority: priority,
//             status: 'Not Started'
//         };
//         tasks.push(task);
//         renderTasks();
//         clearInputFields();
//     }
// }

// // Clear input fields after adding a task
// function clearInputFields() {
//     document.getElementById('task').value = '';
//     document.getElementById('dueDate').value = '';
//     document.getElementById('priority').value = 'low';
// }

// // Render tasks on the page
// function renderTasks() {
//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = ''; // Clear previous list

//     tasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${task.title}</strong>
//                     <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // Delete a task
// function deleteTask(index) {
//     tasks.splice(index, 1); // Remove task by index
//     renderTasks();
// }

// // Search tasks
// function searchTask() {
//     const searchInput = document.getElementById('search').value.toLowerCase();
//     const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(searchInput));

//     const taskList = document.getElementById('taskList');
//     taskList.innerHTML = ''; // Clear previous list

//     filteredTasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${task.title}</strong>
//                     <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// }

// // Initial render
// renderTasks();


// *******************************************************************************************

// const task = document.getElementById('task')
// const dueDate = document.getElementById('dueDate')
// const priority = document.getElementById('priority')
// const taskList = document.getElementById('taskList')
// const search = document.getElementById('search')


// let tasks = []




// const addTask = () => {
//     if (task.value.trim() && dueDate.value) {
//         const taskes = {
//             taskes: task.value.trim(),
//             dueDate: dueDate.value,
//             priority: priority.value,
//             status: 'Not started'
//         }
//         tasks.push(taskes)
//         displayTask()
//         task.value = ''
//         dueDate.value = ''
//         priority.value = ''


//     }
// }

// const displayTask = (taskArray = tasks) => {
//     taskList.innerHTML = '';

//     taskArray.forEach((tas, index) => {
//         let li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${tas.taskes}</strong>
//                     <p class="task-meta">Due: ${tas.dueDate} | Priority: ${tas.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div >
//         `;
//         taskList.appendChild(li);
//     });
// };



// const deleteTask = (index) => {
//     tasks.splice(index, 1)
//     displayTask(tasks)

// }


// search.addEventListener('input', () => {
//     const searchText = search.value.trim().toLowerCase();

//     const filteredTasks = tasks.filter(tas => tas.taskes.toLowerCase().includes(searchText));

//     displayTask(filteredTasks);
// });



// displayTask(tasks)





// const task = document.getElementById('task')
// const dueDate = document.getElementById('dueDate')
// const priority = document.getElementById('priority')
// const taskList = document.getElementById('taskList')
// const search = document.getElementById('search')


// let tasks = []


// const displayTask = (tasks) => {
//     taskList.innerHTML = ''
//     tasks.forEach((tas, index) => {
//         let li = document.createElement('li')
//         li.innerHTML = `
//                     <div class="task-details">
//                 <div>
//                     <strong>${tas.taskes}</strong>
//                     <p class="task-meta">Due: ${tas.dueDate} | Priority: ${tas.priority}</p>
//                 </div>
//                 <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
//             </div >
//         `
//         taskList.appendChild(li)
//     });

// }

// const addTask = () => {
//     const taskes = {
//         taskes: task.value.trim(),
//         dueDate: task.value,
//         priority: task.value
//     }

//     tasks.push(taskes)
//     displayTask(tasks)
//     dueDate.value = ''
//     task.value = ''
//     priority.value = ''
// }

// const deleteTask = (index) => {
//     tasks.splice(index, 1)
//     displayTask(tasks)
// }

// search.addEventListener('input', () => {
//     let searchInput = search.value.trim().toLowerCase()
//     let filteredTasks = tasks.filter(tas => tas.task.toLowerCase().includes(searchInput))
//     displayTask(filteredTasks)

// })


// displayTask(tasks)




//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>











// const taskInput = document.getElementById('task');
// const dueDateInput = document.getElementById('dueDate');
// const priorityInput = document.getElementById('priority');
// const addTaskBtn = document.getElementById('addTask');
// const taskList = document.getElementById('taskList');
// const searchInput = document.getElementById('search');

// let editTask = null;
// let tasks = [];

// // Function to add or edit task
// const addTask = () => {
//     let taskTitle = taskInput.value.trim();
//     let dueDate = dueDateInput.value;
//     let priority = priorityInput.value;

//     if (taskTitle === '' || dueDate === '') {
//         alert('Please fill in all fields.');
//         return;
//     }

//     if (addTaskBtn.innerHTML === 'Edit Task') {
//         let oldTask = editTask.querySelector('strong').innerHTML;
//         let newTask = {
//             taskes: taskTitle,
//             dueDate: dueDate,
//             priority: priority
//         };
//         editTask.querySelector('strong').innerHTML = taskTitle;
//         editTask.querySelector('.task-meta').innerHTML = `Due: ${dueDate} | Priority: ${priority}`;
//         editLocalTasks(oldTask, newTask);
//         addTaskBtn.innerHTML = 'Add Task';
//         taskInput.value = '';
//         dueDateInput.value = '';
//         priorityInput.value = '';
//     } else {
//         let taskObj = {
//             taskes: taskTitle,
//             dueDate: dueDate,
//             priority: priority
//         };
//         let li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${taskObj.taskes}</strong>
//                     <p class="task-meta">Due: ${taskObj.dueDate} | Priority: ${taskObj.priority}</p>
//                 </div>
//                 <button class="edit-btn">Edit</button>
//                 <button class="delete-btn">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//         tasks.push(taskObj);
//         saveLocalTask(taskObj);
//         taskInput.value = '';
//         dueDateInput.value = '';
//         priorityInput.value = '';
//     }
// };

// // Function to update tasks (edit or delete)
// const updateTask = (e) => {
//     if (e.target.classList.contains('delete-btn')) {
//         let taskElement = e.target.closest('li');
//         let taskTitle = taskElement.querySelector('strong').innerHTML;
//         taskList.removeChild(taskElement);
//         deleteLocalTask(taskTitle);
//     }

//     if (e.target.classList.contains('edit-btn')) {
//         let taskElement = e.target.closest('li');
//         let taskTitle = taskElement.querySelector('strong').innerHTML;
//         let taskDueDate = taskElement.querySelector('.task-meta').innerHTML.split(' | ')[0].split(': ')[1];
//         let taskPriority = taskElement.querySelector('.task-meta').innerHTML.split(' | ')[1].split(': ')[1];

//         taskInput.value = taskTitle;
//         dueDateInput.value = taskDueDate;
//         priorityInput.value = taskPriority;

//         addTaskBtn.innerHTML = 'Edit Task';
//         editTask = taskElement;
//         taskInput.focus();
//     }
// };

// // Function to save tasks to localStorage
// const saveLocalTask = (task) => {
//     let storedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
//     storedTasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(storedTasks));
// };

// // Function to retrieve tasks from localStorage
// const getLocalTasks = () => {
//     let storedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
//     storedTasks.forEach((task) => {
//         let li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${task.taskes}</strong>
//                     <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
//                 </div>
//                 <button class="edit-btn">Edit</button>
//                 <button class="delete-btn">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// };

// // Function to edit tasks in localStorage
// const editLocalTasks = (oldTask, newTask) => {
//     let storedTasks = JSON.parse(localStorage.getItem('tasks'));
//     let taskIndex = storedTasks.findIndex(task => task.taskes === oldTask);
//     if (taskIndex !== -1) {
//         storedTasks[taskIndex] = newTask;
//         localStorage.setItem('tasks', JSON.stringify(storedTasks));
//     }
// };

// // Function to delete tasks from localStorage
// const deleteLocalTask = (taskTitle) => {
//     let storedTasks = JSON.parse(localStorage.getItem('tasks'));
//     let taskIndex = storedTasks.findIndex(task => task.taskes === taskTitle);
//     storedTasks.splice(taskIndex, 1);
//     localStorage.setItem('tasks', JSON.stringify(storedTasks));
// };

// // Event listeners
// addTaskBtn.addEventListener('click', addTask);
// taskList.addEventListener('click', updateTask);
// document.addEventListener('DOMContentLoaded', getLocalTasks);

// // Search functionality
// searchInput.addEventListener('input', () => {
//     let searchText = searchInput.value.toLowerCase();
//     let filteredTasks = tasks.filter(task => task.taskes.toLowerCase().includes(searchText));
//     taskList.innerHTML = '';
//     filteredTasks.forEach(task => {
//         let li = document.createElement('li');
//         li.innerHTML = `
//             <div class="task-details">
//                 <div>
//                     <strong>${task.taskes}</strong>
//                     <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
//                 </div>
//                 <button class="edit-btn">Edit</button>
//                 <button class="delete-btn">Delete</button>
//             </div>
//         `;
//         taskList.appendChild(li);
//     });
// });





// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




const taskInput = document.getElementById('task');
const dueDateInput = document.getElementById('dueDate');
const priorityInput = document.getElementById('priority');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('search');

let editTask = null;
let tasks = [];

const addTask = () => {
    let taskTitle = taskInput.value.trim()
    let dueDate = dueDateInput.value
    let priority = priorityInput.value

    if (taskTitle === '' || dueDate === '') {
        aleert('please fill the required fileds')
        return
    }
    if (addTaskBtn.innerHTML === 'Edit Task') {
        let oldTask = editTask.querySelector('strong').innerHTML;
        let newTask = {
            taskes: taskTitle,
            dueDate: dueDate,
            priority: priority
        };
        editTask.querySelector('strong').innerHTML = taskTitle;
        editTask.querySelector('.task-meta').innerHTML = `Due: ${dueDate} | Priority: ${priority}`;
        editLocalTasks(oldTask, newTask);
        addTaskBtn.innerHTML = 'Add Task';
        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = '';
    }
    else {
        let taskObj = {
            taskes: taskTitle,
            dueDate: dueDate,
            priority: priority
        };
        let li = document.createElement('li')
        li.innerHTML = `
                    <div class="task-details">
                <div>
                    <strong>${taskObj.taskes}</strong>
                    <p class="task-meta">Due: ${taskObj.dueDate} | Priority: ${taskObj.priority}</p>
                </div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        
        `
        taskList.append(li)
        tasks.push(taskObj)
        saveLocalTask(taskObj);
        taskInput.value = ''
        dueDateInput.value = ''
        priorityInput.value = ''

    }

}

const updateTask = (e) => {
    if (e.target.innerHTML === 'Delete') {
        const taskItem = e.target.closest('li');
        taskList.removeChild(taskItem);
        deleteLocalTask(taskItem);
    }

    if (e.target.innerHTML === 'Edit') {
        let taskItem = e.target.closest('li');
        let title = taskItem.querySelector('strong').innerHTML;

        // Fixing the split and due date extraction
        let dueDate = taskItem.querySelector('p').innerHTML.split('|')[0].split(':')[1].trim();
        let priority = taskItem.querySelector('p').innerHTML.split('|')[1].split(':')[1].trim();

        taskInput.value = title;
        dueDateInput.value = dueDate;
        priorityInput.value = priority;

        addTaskBtn.innerHTML = 'Edit Task';
        taskInput.focus();
        editTask = taskItem;
    }
}



const saveLocalTask = (task) => {
    let storedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    storedTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
};

// Function to retrieve tasks from localStorage
const getLocalTasks = () => {
    let storedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    storedTasks.forEach((task) => {
        let li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <div>
                    <strong>${task.taskes}</strong>
                    <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
                </div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
};

// Function to edit tasks in localStorage
const editLocalTasks = (oldTask, newTask) => {
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    let taskIndex = storedTasks.findIndex(task => task.taskes === oldTask);
    if (taskIndex !== -1) {
        storedTasks[taskIndex] = newTask;
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
};

// Function to delete tasks from localStorage
const deleteLocalTask = (taskTitle) => {
    let storedTasks = JSON.parse(localStorage.getItem('tasks'));
    let taskIndex = storedTasks.findIndex(task => task.taskes === taskTitle);
    storedTasks.splice(taskIndex, 1);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
};

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', updateTask);
document.addEventListener('DOMContentLoaded', getLocalTasks);

// Search functionality
searchInput.addEventListener('input', () => {
    let searchText = searchInput.value.toLowerCase();
    let filteredTasks = tasks.filter(task => task.taskes.toLowerCase().includes(searchText));
    taskList.innerHTML = '';
    filteredTasks.forEach(task => {
        let li = document.createElement('li');
        li.innerHTML = `
            <div class="task-details">
                <div>
                    <strong>${task.taskes}</strong>
                    <p class="task-meta">Due: ${task.dueDate} | Priority: ${task.priority}</p>
                </div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(li);
    });
});





addTaskBtn.addEventListener('click', addTask)
taskList.addEventListener('click', updateTask);
document.addEventListener('DOMContentLoaded', getLocalTasks);