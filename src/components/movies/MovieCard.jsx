import { Link } from "react-router";
import { getPosterUrl, truncateText } from "../../utils";
import RatingBadge from "./RatingBadge";

export default function MovieCard({ movie }) {
  return (
    <div className="relative transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn">
      <Link
        to={`/movie/${movie.id}`}
        className="
          rounded-2xl overflow-hidden shadow-md transition transform hover:-translate-y-1 duration-300
          bg-white text-gray-900
          dark:bg-gray-800 dark:text-white
          hover:shadow-lg
        "
      >
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="w-full h-80 object-cover"
          loading="lazy"
        />

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            {truncateText(movie.title, 30)}
          </h3>

          <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
            {/* {getGenres(movie.genre_ids)} */}
          </p>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">
              {movie.release_date?.slice(0, 4) || "N/A"}
            </span>
            <RatingBadge rating={movie.vote_average} />
          </div>
        </div>
      </Link>
    </div>
  );
}
