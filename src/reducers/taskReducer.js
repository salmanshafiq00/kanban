import { TaskActionTypes } from '../constants/action-types';

function taskReducer(tasks, action) {
  const { type, payload } = action;
  switch (type) {
    case TaskActionTypes.ADD_TASK:
      return [...tasks, payload]
    case TaskActionTypes.UPDATE_TASK:
      return tasks.map(task => task.id === payload.id ? payload : task)
    case TaskActionTypes.DELETE_TASK:
      return tasks.filter(task => task.id !== payload)
    case TaskActionTypes.MOVE_TASK:
      return tasks.map(task => task.id === payload.id ? { ...task, status: payload.status } : task)
    default:
      throw new Error(`Unhandled action type: ${type}`);
    // return tasks;
  }
}
export default taskReducer;