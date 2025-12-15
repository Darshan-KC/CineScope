import { useParams } from "react-router";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import { getPosterUrl } from "../utils";
import useMovieDetails from "../hooks/useMovieDetails";
import SkeletonCard from "../components/ui/SkeletonCard";

export default function MovieDetailPage() {
  const { id } = useParams();
  const { movie, loading, error } = useMovieDetails(id);

//   if (loading) return <Loader />;
//   if (loading) return <SkeletonCard key={index} />;
if (loading) {
        return (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* {[...Array(8)].map((_, index) => ( */}
                    <SkeletonCard  />
                {/* ))} */}
            </div>
        );
    }
  if (error || !movie) return <ErrorMessage message="Movie not found." />;

  return (
    <div className="p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="w-72 rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {movie.overview || "No description available."}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Release Date: {movie.release_date || "N/A"}
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            Rating:{" "}
            {typeof movie.vote_average === "number"
              ? movie.vote_average.toFixed(1)
              : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
