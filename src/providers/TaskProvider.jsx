import { useReducer } from "react";
import { TaskContext } from "../contexts";
import { getAllTasks } from "../data/task-data";
import { taskReducer } from "../reducers";

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, getAllTasks());
  return (
    <TaskContext value={{ tasks, dispatch }}>
      {children}
    </TaskContext>
  );
};
export default TaskProvider;