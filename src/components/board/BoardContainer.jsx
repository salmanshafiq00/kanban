
import { useTaskContext } from '../../hooks';
import BoardColumn from './BoardColumn';

function BoardContainer() {
  const { tasks } = useTaskContext();

  const columns = [
    { key: 'todo', title: 'To-Do', status: 'todo' },
    { key: 'in-progress', title: 'In Progress', status: 'in-progress' },
    { key: 'done', title: 'Done', status: 'done' }
  ];

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        {columns.map(column => (
          <BoardColumn
            key={column.key}
            title={column.title}
            tasks={tasks.filter(task => task.status === column.status)}
          />
        ))}
      </div>
    </div>
  );
};
export default BoardContainer;