import React from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const priorityStyles = {
  High: "bg-red-100 text-red-700 border-red-300",
  Normal: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Low: "bg-green-100 text-green-700 border-green-300",
};

const TaskItem = ({ task, dispatch }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 max-w-md w-full transition hover:shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-base text-gray-500 font-semibold">Title</h3>
          <p className="text-lg font-bold text-gray-800">{task.title}</p>
        </div>
        <span
          className={`text-xs px-3 py-1 rounded-full border font-medium ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}
      <div className="mb-4">
        <h4 className="text-sm text-gray-500 font-semibold mb-1">
          Description
        </h4>
        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-200">
          {task.description}
        </p>
      </div>

      {/* Due Date */}
      <div className="mb-4">
        <h4 className="text-sm text-gray-500 font-semibold mb-1">Due Date</h4>
        <p className="text-sm text-gray-600 italic">{task.dueDate}</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETE", payload: { id: task.id } })
          }
          className={`flex items-center gap-1 px-4 py-2 text-white text-sm font-medium rounded-lg shadow-sm transition ${
            task.completed
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {task.completed ? "Completed" : "InCompleted"}
        </button>
        <button
          onClick={() =>
            dispatch({ type: "DELETE_TASK", payload: { id: task.id } })
          }
          className="flex items-center gap-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg shadow-sm transition"
        >
          <TrashIcon className="w-4 h-4" />
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
