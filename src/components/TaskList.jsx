import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, dispatch }) => {
  return (
    <div>
      <h1 className=" text-3xl font-bold mb-4 flex justify-center">
        Task List
      </h1>
      <ul className="space-y-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem key={task.id} task={task} dispatch={dispatch} />
          ))
        ) : (
          <p>No tasks available. </p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
