import { Link } from "react-router-dom";
import { getPosterUrl, truncateText } from "../../utils";
import RatingBadge from "./RatingBadge";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-300"
    >
      <img
        src={getPosterUrl(movie.poster_path)}
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">
          {truncateText(movie.title, 30)}
        </h3>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{movie.release_date?.slice(0, 4) || "N/A"}</span>
          <RatingBadge rating={movie.vote_average} />
        </div>
      </div>
    </Link>
  );
}
