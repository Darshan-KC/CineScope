export default function SearchBar({value, onChange}){
    return (
        <input
            type="text"
            placeholder="Search movies..."
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400"
        />
    )
}