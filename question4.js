// Array to store tasks
let tasks = [];

// Counter to assign unique IDs to tasks
let idCounter = 1;

/**
 * Function to add a new task
 * @param {string} name - The name of the task
 * @param {string} description - The description of the task
 * @returns {object} - The newly added task
 */
function addTask(name, description) {
    // Create a new task object with a unique ID
    const task = { id: idCounter++, name, description };
    
    // Add the task to the tasks array
    tasks.push(task);
    
    // Return the newly created task
    return task;
}

/**
 * Function to view all tasks
 * @returns {array} - List of all tasks
 */
function viewTasks() {
    return tasks;
}

/**
 * Function to update an existing task
 * @param {number} id - The ID of the task to update
 * @param {string} name - The new name of the task
 * @param {string} description - The new description of the task
 * @returns {object|null} - The updated task or null if not found
 */
function updateTask(id, name, description) {
    // Find the task by ID
    const task = tasks.find(t => t.id === id);
    
    // If task is found, update its properties
    if (task) {
        task.name = name;
        task.description = description;
        return task;
    }
    
    // Return null if task not found
    return null;
}

/**
 * Function to delete a task by ID
 * @param {number} id - The ID of the task to delete
 */
function deleteTask(id) {
    // Filter out the task with the given ID
    tasks = tasks.filter(t => t.id !== id);
}

// Example usage:

// Add a new task
addTask("Buy groceries", "Milk, Bread, Eggs");
console.log(viewTasks()); // Display all tasks

// Update the first task
updateTask(1, "Go Shopping", "Buy groceries and clothes");
console.log(viewTasks()); // Display updated tasks

// Delete the first task
deleteTask(1);
console.log(viewTasks()); // Display remaining tasks (should be empty)
