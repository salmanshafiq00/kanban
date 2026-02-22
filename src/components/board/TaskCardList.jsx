import TaskCard from "./TaskCard";

function TaskCardList({ tasks }) {
  return (
    <div
      className="space-y-4 flex-1 overflow-visible lg:overflow-y-auto"
    >
      {
        tasks?.length > 0 ? (
          tasks?.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <div className="text-center text-gray-500 mt-10 bg-white p-4 rounded-lg border border-gray-200">
            No tasks found.
          </div>
        )
      }
    </div>
  );
};
export default TaskCardList;