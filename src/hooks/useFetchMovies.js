import { useEffect, useState } from "react";
import movieApi from "../services/movieApi";

/**
 * Custom hook to fetch movies from an API endpoint.
 * @param {string} endpoint - API endpoint, e.g., "/trending/movie/day"
 * @param {object} params - Query parameters for the API call
 * @returns {object} { data, loading, error }
 */
export default function useFetchMovies(endpoint, params = {}) {
  const [data, setData] = useState([]);       // Stores the fetched movies
  const [loading, setLoading] = useState(true); // Indicates whether data is being fetched
  const [error, setError] = useState(null);     // Stores any error from the fetch

  useEffect(() => {
    let isMounted = true; // Prevent state updates if the component unmounts

    const fetchMovies = async () => {
      try {
        // Start loading before API call
        setLoading(true);

        // Record the start time to manage skeleton display duration
        const startTime = Date.now();

        // Make the API request using your movieApi service
        const res = await movieApi.get(endpoint, { params });

        // Calculate how long the API request took
        const elapsed = Date.now() - startTime;

        // Ensure skeleton is visible for at least 500ms
        const minDelay = 5000; 
        const waitTime = elapsed < minDelay ? minDelay - elapsed : 0;

        // Delay updating state if needed
        setTimeout(() => {
          if (isMounted) { // Only update if component is still mounted
            setData(res.data.results || []); // Store movies or empty array
            setError(null);                  // Clear any previous error
            setLoading(false);               // Stop loading (hide skeleton)
          }
        }, waitTime);
      } catch (err) {
        // Handle errors
        if (isMounted) {
          setError(err);       // Store the error
          setLoading(false);   // Stop loading even if there was an error
        }
      }
    };

    fetchMovies(); // Trigger the fetch

    // Cleanup function: prevents state updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, [endpoint, JSON.stringify(params)]); // Re-run effect if endpoint or params change

  // Return data, loading state, and error to the component
  return { data, loading, error };
}
