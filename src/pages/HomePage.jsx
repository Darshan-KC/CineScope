import MovieGrid from "../components/movies/MovieGrid";

const HomePage = () => {
    const movies = {};
    return (
        <>
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Trending Movies</h1>
            {/* <MovieGrid movies={movies} loading={loading} error={error} /> */}
            <MovieGrid movies={movies} />
        </div>
        </>
    )
}

export default HomePage;