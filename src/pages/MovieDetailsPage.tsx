import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { movies } from '../data/movies';
import { formatDate } from '../lib/utils';

export function MovieDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return null;

  const isYouTubeVideo = movie.video_url.includes("youtube.com");

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="mb-4 text-4xl font-bold text-white">{movie.title}</h1>

            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-lg text-white">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-400" />
                <span className="text-lg text-white">{movie.runtime} min</span>
              </div>
              <span className="text-lg text-gray-400">
                {formatDate(movie.release_date)}
              </span>
            </div>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              {movie.overview}
            </p>

            <div className="mb-8 aspect-video overflow-hidden rounded-lg bg-black flex justify-center items-center">
              {isYouTubeVideo ? (
                <iframe
                  src={`https://www.youtube.com/embed/${new URL(movie.video_url).searchParams.get("v")}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              ) : (
                <video
                  controls
                  className="h-full w-full"
                  poster={movie.backdrop_path}
                >
                  <source
                    src={movie.video_url}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-white">Cast</h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={actor.profile_image}
                      alt={actor.name}
                      className="mb-2 w-full rounded-lg"
                    />
                    <h3 className="font-semibold text-white">{actor.name}</h3>
                    <p className="text-sm text-gray-400">{actor.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg bg-gray-800 p-6">
              <h2 className="mb-4 text-xl font-bold text-white">Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400">Genres</h3>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {movie.genres.map((genre, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-red-600 px-3 py-1 text-sm text-white"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
