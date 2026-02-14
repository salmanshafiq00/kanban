import { useState } from 'react';
import BoardLayout from './BoardLayout';
import TaskModal from './TaskModal';

function Board({ showModal, setShowModal }) {
  const defaultTask = {
    title: '',
    description: '',
    tag: '',
    // dueDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    status: 'todo',

  };
  const [task, setTask] = useState(defaultTask);

  const handleClose = () => {
    setTask(defaultTask);
    setShowModal(false);
  }

  return (
    <BoardLayout>
      <h2>Board</h2>
      {
        showModal && (
          <TaskModal
            task={task}
            setTask={setTask}
            onClose={handleClose} />
        )
      }
    </BoardLayout>
  );
};
export default Board;