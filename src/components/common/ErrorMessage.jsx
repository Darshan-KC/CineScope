
export default function ErrorMessage({ message }) {
    return (
        <div className="text-center py-10 text-red-400 font-medium">
            ⚠️ {message}
        </div>
    )
}