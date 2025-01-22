import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieGrid } from '../components/MovieGrid';
import { movies } from '../data/movies';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-white">
          Search Results for "{query}"
        </h1>
        {filteredMovies.length > 0 ? (
          <MovieGrid movies={filteredMovies} />
        ) : (
          <p className="text-center text-lg text-gray-400">
            No movies found for your search.
          </p>
        )}
      </div>
    </div>
  );
}