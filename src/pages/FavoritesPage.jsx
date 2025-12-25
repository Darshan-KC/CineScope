import MovieGrid from "../components/movies/MovieGrid";
import useFavorites from "../hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>
        <p className="text-gray-400">No favorite movies yet ❤️</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Your Favorites</h1>

      <MovieGrid
        movies={favorites}
        loading={false}
        error={null}
      />
    </div>
  );
}
