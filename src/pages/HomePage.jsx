import MovieGrid from "../components/movies/MovieGrid";
import useFetchMovies from "../hooks/useFetchMovies";

const HomePage = () => {
    const { data: movies, loading, error } = useFetchMovies("/trending/movie/day"); // example endpoint
    // const { data: movies, loading, error } = useFetchMovies(); // example endpoint

    // const movies = {};
    return (
        <>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-black mb-4">Trending Movies</h1>
            <MovieGrid movies={movies} loading={loading} error={error} />
            {/* <MovieGrid movies={movies} /> */}
        </div>
        </>
    )
}

export default HomePage;