import { Link } from "react-router";
import { getPosterUrl, truncateText } from "../../utils";
import RatingBadge from "./RatingBadge";
import { Heart } from "lucide-react";
import useFavorites from "../../hooks/useFavorites";

export default function MovieCard({ movie }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(movie.id);

  const toggleFavorite = () => {
    favorite ? removeFavorite(movie.id) : addFavorite(movie);
  };

  return (
    <div className="relative bg-black dark:bg-gray-200 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn">
      <Link
        to={`/movie/${movie.id}`}
        className="
          rounded-2xl overflow-hidden shadow-md transition transform hover:-translate-y-1 duration-300
          text-gray-900
          dark:bg-gray-800 dark:text-white
          hover:shadow-lg
        "
      >
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="rounded-2xl w-full h-80 object-cover"
          loading="lazy" x
        />

        <div className="p-4">
          <h3 className="text-lg text-white dark:text-black font-semibold mb-2">
            {truncateText(movie.title, 30)}
          </h3>

          <p className="text-sm mb-2 text-gray-600 dark:text-gray-400">
            {/* {getGenres(movie.genre_ids)} */}
          </p>

          <div className="flex justify-between items-center text-sm">
            <span className="text-white dark:text-black">
              {movie.release_date?.slice(0, 4) || "N/A"}
            </span>
            <RatingBadge rating={movie.vote_average} />
          </div>
          <button
            onClick={toggleFavorite}
            className="absolute top-2 right-2"
          >
            <Heart
              className={`w-6 h-6 ${favorite ? "text-red-500 fill-red-500" : "text-gray-400"
                }`}
            />
          </button>
        </div>
      </Link>
    </div>
  );
}
