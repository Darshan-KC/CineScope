import MovieGrid from "../components/movies/MovieGrid";

export default function FavoritesPage(){
    // const favorites = useFavorites();
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">Your Favorites</h1>

            <MovieGrid
                movies={favorites}
                loading={false}
                error={false}
                />
        </div>
    )
}