import { useReducer, useState } from "react";
import { TaskContext } from "../contexts";
import { getAllTasks } from "../data/task-data";
import { taskReducer } from "../reducers";

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, getAllTasks());
  const [searchQuery, setSearchQuery] = useState('');

  let filteredTasks = [...tasks];
  if (searchQuery.trim()) {
    filteredTasks = tasks.filter(task =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }


  return (
    <TaskContext value={{ tasks: filteredTasks, dispatch, searchQuery, setSearchQuery }}>
      {children}
    </TaskContext>
  );
};
export default TaskProvider;