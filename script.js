document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button>Delete</button>
            `;

            taskList.appendChild(taskItem);
            taskInput.value = "";

            // Add a click event to delete tasks
            const deleteButton = taskItem.querySelector("button");
            deleteButton.addEventListener("click", function () {
                taskItem.remove();
            });
        }
    });
});
