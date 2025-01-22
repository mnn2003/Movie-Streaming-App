import React from 'react';
import { MovieGrid } from '../components/MovieGrid';
import { movies } from '../data/movies';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="mx-auto max-w-7xl space-y-8 px-4 py-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-white">Featured Movies</h2>
          <MovieGrid movies={movies} />
        </section>
      </div>
    </div>
  );
}