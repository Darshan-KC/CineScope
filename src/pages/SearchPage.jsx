import { useSearchParams } from "react-router";
// import useFetchMovies from "../hooks/useFetchMovies";
import MovieGrid from "../components/movies/MovieGrid";
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
import useSearchMovies from "../hooks/useSearchMovies";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  // const { movies, loading, error } = useFetchMovies(query);
  const { movies, loading, error } = useSearchMovies(query);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for: <span className="text-yellow-400">{query}</span>
      </h2>

      <MovieGrid movies={movies} />
    </div>
  );
}
