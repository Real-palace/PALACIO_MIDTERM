let tasks = [];
let idCounter = 1;

function addTask(name, description) {
    const task = { id: idCounter++, name, description };
    tasks.push(task);
    return task;
}

function viewTasks() {
    return tasks;
}

function updateTask(id, name, description) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        return task;
    }
    return null;
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
}

// Example usage
addTask("Buy groceries", "Milk, Bread, Eggs");
console.log(viewTasks());
updateTask(1, "Go Shopping", "Buy groceries and clothes");
console.log(viewTasks());
deleteTask(1);
console.log(viewTasks());