
export function FormSelectElement({
  id,
  label,
  name,
  value,
  onChange,
  onBlur,
  options = [],
  required = false,
  error = null,
  placeholder = 'Select an option',
}) {
  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 focus:outline-none transition-colors ${error
          ? 'border-red-300 focus:border-red-500'
          : 'border-gray-200 focus:border-gray-900'
          }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}