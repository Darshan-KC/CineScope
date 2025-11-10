import { useEffect, useState } from "react";
import movieApi from "../services/movieApi";

export default function useFetchMovies(endpoint, params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await movieApi.get(endpoint, { params });
        setData(res.data.results || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [endpoint, JSON.stringify(params)]);

  return { data, loading, error };
}
