const SearchBar = ({ value, onChange, loading }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-lg border bg-gray-100 dark:bg-gray-800"
      />

      {loading && (
        <div className="absolute right-3 top-3 w-4 h-4 border-2 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
      )}

      {value && !loading && (
        <button
          className="absolute right-3 top-3 text-gray-500"
          onClick={() => onChange({ target: { value: "" } })}
        >
          ✖
        </button>
      )}
    </div>
  );
};
