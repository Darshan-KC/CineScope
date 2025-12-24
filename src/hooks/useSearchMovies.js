import { useEffect, useState } from "react";
import { searchMovies } from "../services/movieApi";

export default function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query || !query.trim()) {
      setMovies([]);
      return;
    }

    let isMounted = true;

    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await searchMovies(query);

        if (isMounted) {
          setMovies(data.results || []);
        }
      } catch (err) {
        if (isMounted) {
          setError("Failed to search movies.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return { movies, loading, error };
}
