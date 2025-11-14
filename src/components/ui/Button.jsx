export default function Button({children, onClick, className}){
    return (
        <button
        onClick={onClick}
        className={`px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition ${className}`}
        >
        {children}
        </button>
    )
}