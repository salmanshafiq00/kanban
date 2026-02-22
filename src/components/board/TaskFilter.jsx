import { useState } from "react";
import { getTagLabelByValue } from '../../utils/tag';
import { FilterSvg } from "../icons";

function TaskFilter({ tasks, filterTag, setFilterTag }) {
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
            <div
              className="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider flex justify-between items-center"
            >
              <p>Filter by tag</p>
              <p className="text-xs text-gray-500 hover:text-gray-700 cursor-pointer" onClick={() => setFilterTag(null)}> X Clear</p>
            </div>
            {
              tasks?.length > 0 && tasks.map(task => (
                <button
                  key={task.id}
                  onClick={() => {
                    setFilterTag(task.tag);
                    setIsFilterOpen(false);
                  }}
                  type="button"
                  className={`w-full text-left px-4 py-2 hover:bg-gray-50 cursor-pointer ${filterTag === task.tag ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                >
                  {getTagLabelByValue(task.tag)}
                </button>
              ))
            }
          </div>
        )
      }

    </div >
  );
};
export default TaskFilter;