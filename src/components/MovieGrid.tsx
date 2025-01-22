import React from 'react';
import { MovieCard } from './MovieCard';
import type { Movie } from '../types/movie';

interface MovieGridProps {
  movies: Movie[];
  className?: string;
}

export function MovieGrid({ movies, className }: MovieGridProps) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${className}`}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}