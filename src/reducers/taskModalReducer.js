import { TaskModalActionTypes } from "../constants/action-types";

const defaultTask = {
  id: crypto.randomUUID(),
  title: '',
  description: '',
  tag: '',
  dueDate: '',
  status: 'todo',
};

function taskModalReducer(state, action) {
  const { isEditMode, task } = action.payload || {};
  switch (action.type) {
    case TaskModalActionTypes.SHOW_MODAL:
      return { showModal: true, isEditMode: isEditMode, task: task || defaultTask };
    case TaskModalActionTypes.HIDE_MODAL:
      return { showModal: false, isEditMode: false, task: defaultTask };
    default:
      return state;
  }
}

export default taskModalReducer;