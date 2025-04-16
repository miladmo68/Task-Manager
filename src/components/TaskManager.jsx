import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskManager = () => {
  return (
    <div className=" flex-row items-center  content-center py-6 bg-gray-200 ">
      <h1 className=" font-extrabold text-6xl">TaskManager</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default TaskManager;
