# Kanban Task Management

This project is a simple **Kanban Task Management** application that allows users to organize tasks into three categories: `TODO`, `DOING`, and `DONE`. It includes a script for dynamically capturing task details and filtering completed tasks.

## Features

- **Task Input**: Users can input task details (title, description, and status) through prompts.
- **Status Validation**: Ensures that the task status is one of the valid options: `todo`, `doing`, or `done`.
- **Completed Task Filtering**: Automatically filters and displays tasks marked as `done`.
- **Dynamic Console Output**: Displays completed tasks or a motivational message if no tasks are completed.

## How It Works

1. The script prompts the user to enter details for two tasks:
   - **Title**: A short title for the task.
   - **Description**: A brief description of the task.
   - **Status**: The current status of the task (`todo`, `doing`, or `done`).

2. The script validates the status input to ensure it matches one of the valid options.

3. After collecting the tasks, the script filters tasks with a status of `done` and logs them to the console.

4. If no tasks are marked as `done`, the script logs a motivational message: `"no tasks completed, let's get to work!"`.

## File Structure

- `Index.html`: The main HTML file containing the structure of the Kanban board.
- `styles.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file for adding interactivity and task management functionality.
- `assets/`: Contains images, icons, and other assets used in the project.

## How to Run

1. Open the `Index.html` file in your browser to view the Kanban board layout.
2. Open the browser's developer console to interact with the script.
3. Follow the prompts to input task details and view the results in the console.

