import axios from 'axios';
import { API_BASE_URL, API_KEY } from './config';

const movieApi = axios.create({
    baseURL: API_BASE_URL,
    params: {api_key: API_KEY},
});

export const searchMovies = async (query) => {
  const res = await movieApi.get("/search/movie", {
    params: { query },
  });
  return res.data;
};

export default movieApi;