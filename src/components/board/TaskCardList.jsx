import TaskCard from "./TaskCard";

function TaskCardList({ tasks }) {
  return (
    <div
      className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
    >
      {
        tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))
      }
    </div>
  );
};
export default TaskCardList;