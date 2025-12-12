import { useParams } from "react-router"
import Loader from "../components/common/Loader";
import ErrorMessage from "../components/common/ErrorMessage";
// import { getPosterUrl } from "../utils/getPosterUrl";
import { getPosterUrl } from "../utils";
import useFetchMovies from "../hooks/useFetchMovies";

export default function () {
    const { id } = useParams();
    const { data: movie, loading, error } = useFetchMovies();

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message="Movie not found." />;

    return (
        <div className="p-6 text-white">
            <div className="flex flex-col md:flex-row gap-8">
                <img src={getPosterUrl(movie.poster_path)}
                    className="w-72 rounded-xl shadow-lg"
                />
                <div>
                    <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                    <p className="text-gray-300 mb-4">{movie.overview}</p>

                    <p className="text-sm text-gray-400">
                        Release Date: {movie.release_date}
                    </p>
                    <p className="text-sm text-gray-400">
                        Rating: {movie.vote_average.toFixed(1)}
                    </p>
                </div>
            </div>
        </div>
    );
}