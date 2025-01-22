import axios from 'axios';
import type { Movie, MovieDetails } from '../types/movie';

const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export async function getMovies(category: string, page = 1) {
  const response = await api.get<{ results: Movie[] }>(`/movie/${category}`, {
    params: { page },
  });
  return response.data.results;
}

export async function getMovieDetails(id: number) {
  const response = await api.get<MovieDetails>(`/movie/${id}`, {
    params: {
      append_to_response: 'credits,videos',
    },
  });
  return response.data;
}

export async function searchMovies(query: string, page = 1) {
  const response = await api.get<{ results: Movie[] }>('/search/movie', {
    params: { query, page },
  });
  return response.data.results;
}