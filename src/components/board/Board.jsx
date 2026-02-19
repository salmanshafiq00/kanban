import { useState } from 'react';
import BoardContainer from './BoardContainer';
import BoardLayout from './BoardLayout';
import Header from './Header';
import TaskModal from './TaskModal';

function Board() {
  const defaultTask = {
    title: '',
    description: '',
    tag: '',
    // dueDate: new Date().toISOString().split('T')[0],
    dueDate: '',
    status: 'todo',

  };
  const [task, setTask] = useState(defaultTask);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setTask(defaultTask);
    setShowModal(false);
  }

  return (
    <BoardLayout>
      <Header setShowModal={setShowModal} />
      <BoardContainer />
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