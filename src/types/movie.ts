export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: string[];
  video_url: string; // Changed from trailer_url
  cast: {
    name: string;
    character: string;
    profile_image: string;
  }[];
}