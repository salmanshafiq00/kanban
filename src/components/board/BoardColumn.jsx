import ColumnHeader from "./ColumnHeader";
import TaskCardList from "./TaskCardList";
import TaskFilter from "./TaskFilter";
import TaskSort from "./TaskSort";

function BoardColumn({ title, tasks }) {
  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <div className="flex items-center gap-3 mb-6">
        <ColumnHeader title={title} count={tasks?.length} />
        <div className="ml-auto flex items-center gap-2">
          <TaskFilter />
          <TaskSort />
        </div>
      </div>
      <TaskCardList tasks={tasks} />
    </div>
  );
};
export default BoardColumn;