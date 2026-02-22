import { TaskActionTypes } from '../../constants/action-types';
import { getOtherStatuses } from '../../data/task-data';
import { useTaskContext, useTaskModalContext } from '../../hooks';

function TaskActionMenu({ task }) {
  const { dispatch: modalDispatch } = useTaskModalContext();
  const { dispatch: taskDispatch } = useTaskContext();
  const otherStatuses = getOtherStatuses(task.status);
  return (
    <div
      className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
      id="wireframes-menu"
      data-card-menu
    >
      <p
        className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider cursor-pointer"
      >
        Move to
      </p>
      {
        otherStatuses.map(status => (
          <button
            key={status.key}
            onClick={() => {
              taskDispatch({ type: TaskActionTypes.MOVE_TASK, payload: { id: task.id, status: status.status } });
            }}
            type="button"
            className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
          >
            {status.title}
          </button>
        ))
      }
      <div
        className="border-t border-gray-100 mt-2 pt-2 space-y-1"
      >
        <button
          type="button"
          onClick={() => modalDispatch({ type: TaskModalActionTypes.SHOW_MODAL, payload: { isEditMode: true, task } })}
          className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
        >
          Edit Card
        </button>
        <button
          type="button"
          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
        >
          Delete Card
        </button>
      </div>
    </div>
  );
};
export default TaskActionMenu;