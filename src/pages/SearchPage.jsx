import { useSearchParams } from "react-router";

export default function SearchPage() {
    const [params] = useSearchParams();
    const query = params.get("query");

    const { data: data, loading, error } = {};
    return (
        <div className="p-6">
            <h1 className="text-xl text-white font-semibold mb-4">
                Search Results for: <span className="text-yellow-400">{query}</span>
            </h1>

            <MovieGrid movies={movies} loading={loading} error={error} />

        </div>
    );
}