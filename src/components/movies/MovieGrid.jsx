import ErrorMessage from "../common/ErrorMessage";
import Loader from "../common/Loader";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, loading, error }) {
    if (loading) return <Loader />;
    if (error) return <ErrorMessage message="Failed to load movies." />;
    if (!movies?.length) return <ErrorMessage message="No movies found." />;

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
            {
                movies.map((m) => (
                    <MovieCard key={m.id} movie={m} />
                ))
            }
        </div>
    )
}