export default function RatingBadge({rating}){
    const color = rating >= 8 ? "bg-green-500" : rating >= 6 ? "bg-yellow-400" : "bg-red-500";
    
    return (
        <span className={`text-xs px-2 py-1 rounded-lg text-black font-bold ${color}`}>
            {rating?.toFixed(1) || "N/A"}
        </span>
    );
}