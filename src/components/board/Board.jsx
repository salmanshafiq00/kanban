import { useTaskModalContext } from '../../hooks';
import BoardContainer from './BoardContainer';
import BoardLayout from './BoardLayout';
import Header from './Header';
import TaskModal from './TaskModal';

function Board() {

  const { showModal } = useTaskModalContext();

  return (
    <BoardLayout>
      <Header />
      <BoardContainer />
      {
        showModal && <TaskModal />
      }
    </BoardLayout>

  );
};
export default Board;