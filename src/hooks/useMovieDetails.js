import { useEffect, useState } from "react";
import movieApi from "../services/movieApi";
import { ENDPOINTS } from "../services/endpoints";

export default function useMovieDetails(id) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetails = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await movieApi.get(ENDPOINTS.DETAILS(id));
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load movie details");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  return { movie, loading, error };
}
