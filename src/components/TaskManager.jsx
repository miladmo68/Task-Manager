import React, { useReducer } from "react";
import { tasksReducer, initialTasks } from "../reducers/tasksReducer";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  console.log(tasks);
  return (
    <div className="flex flex-col items-center py-6 bg-gray-200 gap-6 ">
      <h1 className=" font-extrabold text-6xl">Task Manager</h1>
      <TaskForm dispatch={dispatch} />
      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
};

export default TaskManager;
