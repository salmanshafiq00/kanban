import { useState } from "react";
import { SortSvg } from "../icons";

function TaskSort({ sortBy, setSortBy }) {
  const [isSortOpen, setIsSortOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsSortOpen(isSortOpen => !isSortOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 text-sm  border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none cursor-pointer ${sortBy ? 'bg-blue-50 text-blue-500' : 'text-gray-600 bg-white'}`}
        data-menu-toggle="todo-sort-menu"
      >
        <SortSvg />
        Sort
      </button>
      {
        isSortOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
            id="todo-sort-menu"
            data-menu
          >
            <div
              className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider flex justify-between items-center"
            >
              <p>Sort by date</p>
              <p

                className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => {
                  setIsSortOpen(false);
                  setSortBy(null);
                }}>
                x Clear
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsSortOpen(false);
                setSortBy('newest');
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${sortBy === 'newest' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
            >
              Newest first
            </button>
            <button
              type="button"
              onClick={() => {
                setIsSortOpen(false);
                setSortBy('oldest');
              }}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${sortBy === 'oldest' ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
            >
              Oldest first
            </button>
          </div>
        )
      }

    </div>
  );
};
export default TaskSort;