import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { cn } from '../lib/utils';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export function MovieCard({ movie, className }: MovieCardProps) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className={cn(
        'group relative overflow-hidden rounded-lg transition-transform hover:scale-105',
        className
      )}
    >
      <img
        src={movie.poster_path} // Remove TMDB base URL since we're using full URLs
        alt={movie.title}
        className="h-full w-full object-cover aspect-[2/3]" // Add aspect ratio for consistent card sizes
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute bottom-0 p-4">
          <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
          <div className="mt-2 flex items-center gap-2">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm text-white">
              {movie.vote_average.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}