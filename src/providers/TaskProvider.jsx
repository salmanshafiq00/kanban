import { TaskContext } from "../contexts";
import { getAllTasks } from "../data/task-data";

function TaskProvider({ children }) {
  const tasks = getAllTasks();
  return (
    <TaskContext value={{ tasks }}>
      {children}
    </TaskContext>
  );
};
export default TaskProvider;