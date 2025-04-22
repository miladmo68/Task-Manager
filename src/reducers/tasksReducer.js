import React from "react";

export const initialTasks = [];

export function tasksReducer(state, action) {
  switch (action.type) {
    case "ADD-TASK":
      return [
        ...state,
        { ...action.payLoad, id: Date.now(), completed: false },
      ];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload.id);
    case "TOGGLE_COMPLETE":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
}
