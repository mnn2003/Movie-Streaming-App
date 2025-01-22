import { Movie } from '../types/movie';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1920",
    release_date: "2010-07-16",
    vote_average: 8.8,
    runtime: 148,
    genres: ["Action", "Sci-Fi", "Thriller"],
    video_url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    cast: [
      {
        name: "Leonardo DiCaprio",
        character: "Cobb",
        profile_image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Joseph Gordon-Levitt",
        character: "Arthur",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 2,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1920",
    release_date: "2008-07-18",
    vote_average: 9.0,
    runtime: 152,
    genres: ["Action", "Crime", "Drama"],
    video_url: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    cast: [
      {
        name: "Christian Bale",
        character: "Bruce Wayne",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Heath Ledger",
        character: "Joker",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 3,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster_path: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1920",
    release_date: "2014-11-07",
    vote_average: 8.6,
    runtime: 169,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    video_url: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    cast: [
      {
        name: "Matthew McConaughey",
        character: "Cooper",
        profile_image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Anne Hathaway",
        character: "Brand",
        profile_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 4,
    title: "The Matrix",
    overview: "A computer programmer discovers that reality as he knows it is a simulation created by machines, and joins a rebellion to break free.",
    poster_path: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1920",
    release_date: "1999-03-31",
    vote_average: 8.7,
    runtime: 136,
    genres: ["Action", "Sci-Fi"],
    video_url: "https://www.youtube.com/watch?v=vKQi3bBA1y8",
    cast: [
      {
        name: "Keanu Reeves",
        character: "Neo",
        profile_image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Laurence Fishburne",
        character: "Morpheus",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 5,
    title: "Pulp Fiction",
    overview: "Various interconnected stories of criminals in Los Angeles, including two hit men, a gangster and his wife, and a mysterious briefcase.",
    poster_path: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1920",
    release_date: "1994-10-14",
    vote_average: 8.9,
    runtime: 154,
    genres: ["Crime", "Drama"],
    video_url: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    cast: [
      {
        name: "John Travolta",
        character: "Vincent Vega",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Samuel L. Jackson",
        character: "Jules Winnfield",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 6,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1920",
    release_date: "1994-09-23",
    vote_average: 9.3,
    runtime: 142,
    genres: ["Drama"],
    video_url: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    cast: [
      {
        name: "Tim Robbins",
        character: "Andy Dufresne",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Morgan Freeman",
        character: "Red",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 7,
    title: "Blade Runner 2049",
    overview: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    poster_path: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&q=80&w=1920",
    release_date: "2017-10-06",
    vote_average: 8.0,
    runtime: 164,
    genres: ["Sci-Fi", "Drama", "Mystery"],
    video_url: "https://www.youtube.com/watch?v=gCcx85zbxz4",
    cast: [
      {
        name: "Ryan Gosling",
        character: "K",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Harrison Ford",
        character: "Rick Deckard",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 8,
    title: "The Grand Budapest Hotel",
    overview: "The adventures of Gustave H, a legendary concierge at a famous European hotel, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
    poster_path: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920",
    release_date: "2014-03-07",
    vote_average: 8.1,
    runtime: 99,
    genres: ["Comedy", "Drama"],
    video_url: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
    cast: [
      {
        name: "Ralph Fiennes",
        character: "M. Gustave",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Tony Revolori",
        character: "Zero",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 9,
    title: "Mad Max: Fury Road",
    overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
    poster_path: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?auto=format&fit=crop&q=80&w=1920",
    release_date: "2015-05-15",
    vote_average: 8.3,
    runtime: 120,
    genres: ["Action", "Adventure", "Sci-Fi"],
    video_url: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
    cast: [
      {
        name: "Tom Hardy",
        character: "Max Rockatansky",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Charlize Theron",
        character: "Imperator Furiosa",
        profile_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 10,
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    poster_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1920",
    release_date: "2019-10-11",
    vote_average: 8.6,
    runtime: 132,
    genres: ["Drama", "Thriller"],
    video_url: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    cast: [
      {
        name: "Song Kang-ho",
        character: "Ki Taek",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Cho Yeo-jeong",
        character: "Yeon Kyo",
        profile_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 11,
    title: "La La Land",
    overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
    poster_path: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&q=80&w=1920",
    release_date: "2016-12-09",
    vote_average: 8.0,
    runtime: 128,
    genres: ["Drama", "Music", "Romance"],
    video_url: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
    cast: [
      {
        name: "Ryan Gosling",
        character: "Sebastian",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Emma Stone",
        character: "Mia",
        profile_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 12,
    title: "The Lighthouse",
    overview: "Two lighthouse keepers try to maintain their sanity while living on a remote and mysterious New England island in the 1890s.",
    poster_path: "https://images.unsplash.com/photo-1533293046890-f1ab67e1e944?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1533293046890-f1ab67e1e944?auto=format&fit=crop&q=80&w=1920",
    release_date: "2019-10-18",
    vote_average: 7.5,
    runtime: 109,
    genres: ["Drama", "Fantasy", "Horror"],
    video_url: "https://www.youtube.com/watch?v=Hyag7lR8CPA",
    cast: [
      {
        name: "Robert Pattinson",
        character: "Ephraim Winslow",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Willem Dafoe",
        character: "Thomas Wake",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 13,
    title: "Whiplash",
    overview: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    poster_path: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1920",
    release_date: "2014-10-10",
    vote_average: 8.5,
    runtime: 107,
    genres: ["Drama", "Music"],
    video_url: "https://www.youtube.com/watch?v=7d_jQycdQGo",
    cast: [
      {
        name: "Miles Teller",
        character: "Andrew Neiman",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "J.K. Simmons",
        character: "Terence Fletcher",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 14,
    title: "Ex Machina",
    overview: "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a highly advanced humanoid A.I.",
    poster_path: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1920",
    release_date: "2015-04-24",
    vote_average: 7.7,
    runtime: 108,
    genres: ["Drama", "Sci-Fi", "Thriller"],
    video_url: "https://www.youtube.com/watch?v=EoQuVnKhxaM",
    cast: [
      {
        name: "Domhnall Gleeson",
        character: "Caleb Smith",
        profile_image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Alicia Vikander",
        character: "Ava",
        profile_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      }
    ]
  },
  {
    id: 15,
    title: "The Witch",
    overview: "A family in 1630s New England is torn apart by the forces of witchcraft, black magic, and possession.",
    poster_path: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?auto=format&fit=crop&q=80&w=1920",
    release_date: "2015-01-27",
    vote_average: 7.2,
    runtime: 92,
    genres: ["Horror", "Mystery", "Drama"],
    video_url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    cast: [
      {
        name: "Anya Taylor-Joy",
        character: "Thomasin",
        profile_image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
      },
      {
        name: "Ralph Ineson",
        character: "William",
        profile_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
      }
    ]
  }
];