import { useState } from 'react';
import { getTagByValue } from '../../utils/tag';
import { DateSvg, VerticalEllipsisSvg } from '../icons';
import TaskActionMenu from './TaskActionMenu';

function TaskCard({ task }) {
  const [showMenu, setShowMenu] = useState(false);
  const tag = getTagByValue(task.tag);
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
      data-card={task.title}
      data-column={task.status}
    >
      <div
        className="absolute top-4 right-4 text-gray-500"
        data-card-menu-container
      >
        <button
          type="button"
          className="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none cursor-pointer"
          data-card-menu-toggle={task.title.toLowerCase().replace(/\s+/g, '-') + '-menu'}
          aria-label="Open card menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <VerticalEllipsisSvg />
        </button>
        {showMenu && <TaskActionMenu task={task} />}
      </div>
      <div className="mb-3">
        <h3
          className="font-semibold text-gray-900 text-sm"
        >
          {task.title}
        </h3>
      </div>
      <p className="text-xs text-gray-600 mb-4">
        {task.description}
      </p>
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-block px-2.5 py-1 text-xs font-medium rounded"
          style={{ backgroundColor: tag?.color + '20', color: tag?.color }}
        >{tag?.label}</span
        >
      </div>
      <div
        className="flex items-center gap-1 text-xs text-gray-500"
      >
        <DateSvg />
        {task.dueDate}
      </div>
    </div>
  );
};
export default TaskCard;