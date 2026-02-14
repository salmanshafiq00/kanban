import { useState } from "react";
import Board from "../board/Board";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Layout() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <Main>
          <Header setShowModal={setShowModal} />
          <Board showModal={showModal} setShowModal={setShowModal} />
        </Main>
      </div>
    </>

  );
};
export default Layout;