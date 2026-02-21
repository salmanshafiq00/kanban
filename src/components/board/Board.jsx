import { useTaskContext, useTaskModalContext } from '../../hooks';
import BoardContainer from './BoardContainer';
import BoardLayout from './BoardLayout';
import Header from './Header';
import TaskModal from './TaskModal';

function Board() {

  const { tasks } = useTaskContext();
  const { showModal } = useTaskModalContext();

  return (
    <BoardLayout>
      <Header />
      <BoardContainer tasks={tasks} />
      {
        showModal && <TaskModal />
      }
    </BoardLayout>

  );
};
export default Board;