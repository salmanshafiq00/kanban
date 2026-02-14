
function ColumnHeader({ title, count = 0 }) {
  return (
    <div className="flex items-center gap-3">
      <h2
        className="text-lg font-semibold text-gray-900"
      >
        {title}
      </h2>
      <span
        className="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full"
      >{count}</span
      >
    </div>
  );
};
export default ColumnHeader;