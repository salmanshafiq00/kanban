import { useState } from 'react';
import { useTaskContext } from '../../hooks';
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
  const taskContext = useTaskContext();
  const [tasks, setTasks] = useState(taskContext.tasks);

  const handleClose = () => {
    setTask(defaultTask);
    setShowModal(false);
  }

  const handleSave = (taskToSave) => {
    console.log('Saving task:', taskToSave);
    setTasks(prevTasks => [...prevTasks, { ...taskToSave, id: Date.now() }]);
    handleClose();
  };

  return (
    <BoardLayout>
      <Header setShowModal={setShowModal} />
      <BoardContainer tasks={tasks} />
      {
        showModal && (
          <TaskModal
            task={task}
            setTask={setTask}
            onClose={handleClose}
            onSave={handleSave} />
        )
      }
    </BoardLayout>
  );
};
export default Board;