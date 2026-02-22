
import { useTaskContext } from '../../hooks';
import BoardColumn from './BoardColumn';

function BoardContainer() {
  const { tasks } = useTaskContext();
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        <BoardColumn
          key="todo"
          title="To-Do"
          tasks={todoTasks} />
        <BoardColumn
          key="in-progress"
          title="In Progress"
          tasks={inProgressTasks} />
        <BoardColumn
          key="done"
          title="Done"
          tasks={doneTasks} />
      </div>
    </div>
  );
};
export default BoardContainer;