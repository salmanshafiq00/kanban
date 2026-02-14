
export function FormDateElement({
  id,
  label,
  name,
  type = 'date',
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  error = null
}) {
  return (
    <div>
      {
        label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </label>
        )
      }
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required={required}
        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none transition-colors ${error
          ? 'border-red-300 focus:border-red-500'
          : 'border-gray-200 focus:border-gray-900'
          }`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};
