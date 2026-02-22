import { useState } from "react";
import ColumnHeader from "./ColumnHeader";
import TaskCardList from "./TaskCardList";
import TaskFilter from "./TaskFilter";
import TaskSort from "./TaskSort";

function BoardColumn({ title, tasks }) {
  const [filterTag, setFilterTag] = useState(null);

  const filteredTasks = filterTag
    ? tasks.filter(task => task.tag === filterTag)
    : tasks;

  return (
    <div className="flex-1 flex flex-col min-w-0 w-full">
      <div className="flex items-center gap-3 mb-6">
        <ColumnHeader title={title} count={filteredTasks?.length} />
        <div className="ml-auto flex items-center gap-2">
          <TaskFilter tasks={tasks} filterTag={filterTag} setFilterTag={setFilterTag} />
          <TaskSort />
        </div>
      </div>
      <TaskCardList tasks={filteredTasks} />
    </div>
  );
};
export default BoardColumn;