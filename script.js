const inputField=document.getElementById('inputField');
const taskList=document.querySelector('.task-list');
const btn=document.getElementById('add-task');
const btnRemover=document.getElementById('remove-all-tasks')
const allLi=document.querySelectorAll('li');

function createTask() {
    const newTask=document.createElement('li');
    newTask.textContent=inputField.value;
    taskList.append(newTask);
    inputField.value='';
}

taskList.addEventListener('click', function(event) {
    if (event.target.tagName==='LI') {
        event.target.classList.toggle('task-done');
    }
})

btn.addEventListener('click', createTask);
btnRemover.addEventListener('click', function() {
    const isConfirmed=window.confirm('Вы точно хотите удалить все задачи?');
    if (isConfirmed) {deleteAllTasks()};
});

function deleteAllTasks() {
    const allLi=document.querySelectorAll('li');
    allLi.forEach(function(element) {
    element.remove();
    })
}