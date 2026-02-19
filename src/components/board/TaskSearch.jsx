import { useState } from "react";
import { SearchSvg } from "../icons";

function TaskSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="relative w-full sm:w-64">
      <SearchSvg />
      <input
        type="search"
        id="task-search"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={`w-full rounded-xl border bg-white pl-11 pr-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${searchQuery
          ? 'border-gray-900 bg-gray-50'
          : 'border-gray-200 focus:border-gray-900'
          }`}
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery('')}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
};
export default TaskSearch;