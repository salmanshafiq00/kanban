import { useReducer } from "react";
import { TaskModalContext } from "../contexts";
import { taskModalReducer } from "../reducers";

function TaskModalProvider({ children }) {
  const [state, dispatch] = useReducer(taskModalReducer,
    {
      showModal: false,
      isEditMode: false,
      task: null
    });
  const { showModal, isEditMode, task } = state;
  return (
    <TaskModalContext value={{ showModal, isEditMode, task, dispatch }}>
      {children}
    </TaskModalContext>
  );
};
export default TaskModalProvider;