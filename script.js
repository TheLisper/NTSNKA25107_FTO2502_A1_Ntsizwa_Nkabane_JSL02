// A function to get the title,description and status
function getTaskDetails(taskNumber) {
    let taskTitle = prompt('Enter title: ');
    let taskDescription = prompt('Enter description: ');
    let taskStatus;
    const validStatuses = ['todo','doing','done'];

    // Status
    do{
        taskStatus = prompt('Enter Status (todo, doing, done): ')
        .toLowerCase(); // This sets everything to lowercase

        if(!validStatuses.includes(taskStatus)){
            alert('Invalid status. Please enter todo, doing, done.');
        }
    }
    
    while (!validStatuses.includes(taskStatus));
    return {
        title: taskTitle,
        description: taskDescription,
        status: taskStatus,
    };
}

// Get two tasks from the user
const task1 = getTaskDetails(1);
const task2 = getTaskDetails(2);

// This is for completed tasks
const completedTasks = [task1,task2].filter(task => task.status === 'done');

// This will print out the results
if (completedTasks.length > 0){
    completedTasks.forEach(task => {
        console.log('completed task: ${task.title},Statuses:${task.status}');
    });
}
else {
    console.log("no tasks completed, let's get to work!");
    }
