import { useState } from "react";
import { FilterSvg } from "../icons";

function TaskFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsFilterOpen(isFilterOpen => !isFilterOpen)}
        className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none cursor-pointer"
        data-menu-toggle="todo-filter-menu"
      >
        <FilterSvg />
        Filter
      </button>
      {
        isFilterOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 z-40"
            id="todo-filter-menu"
            data-menu
          >
            <p
              className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider"
            >
              Filter by tag
            </p>
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              Design
            </button>
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              Operations
            </button>
            <button
              type="button"
              className="w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer"
            >
              Marketing
            </button>
          </div>
        )
      }

    </div>
  );
};
export default TaskFilter;