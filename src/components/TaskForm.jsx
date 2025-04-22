import React, { useState } from "react";

const TaskForm = ({ dispatch }) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "Normal",
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title) return;
    dispatch({ type: "ADD-TASK", payLoad: form });
    setForm({
      title: "",
      description: "",
      dueDate: "",
      priority: "Normal",
    });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <form className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-5">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Add a New Task
      </h2>

      {/* Title */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium" htmlFor="title">
          Title
        </label>
        <input
          value={form.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Enter task title"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium" htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Enter task details"
          rows="4"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
      </div>

      {/* Due Date */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium" htmlFor="dueDate">
          Due Date
        </label>
        <input
          name="dueDate"
          type="date"
          value={form.dueDate}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Priority */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium" htmlFor="priority">
          Priority
        </label>
        <select
          name="priority"
          value={form.priority}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option className="text-gray-700" value="Low">
            Low
          </option>
          <option className="text-gray-700" value="Normal">
            Normal
          </option>
          <option className="text-gray-700" value="High">
            High
          </option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
