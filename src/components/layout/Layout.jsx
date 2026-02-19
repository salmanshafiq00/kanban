import Board from '../board/Board';
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout() {

  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <Main>
          <Board />
        </Main>
      </div>
    </>

  );
};
export default Layout;