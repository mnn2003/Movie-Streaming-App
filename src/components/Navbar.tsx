import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Film } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/95 px-4 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-red-600">
          <Film className="h-8 w-8" />
          <span className="text-xl font-bold">MovieFlix</span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-6">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/movies/popular" className="text-gray-300 hover:text-white">
            Popular
          </Link>
          <Link to="/movies/top_rated" className="text-gray-300 hover:text-white">
            Top Rated
          </Link>
          <Link to="/movies/upcoming" className="text-gray-300 hover:text-white">
            Upcoming
          </Link>
        </div>

        <form onSubmit={handleSearch} className="hidden md:block">
          <div className="relative">
            <input
              type="search"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 rounded-full bg-gray-800 px-4 py-2 pl-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </form>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 mt-4 bg-black/95 px-4 py-4 md:hidden">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full bg-gray-800 px-4 py-2 pl-10 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </form>
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/movies/popular"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Popular
            </Link>
            <Link
              to="/movies/top_rated"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Top Rated
            </Link>
            <Link
              to="/movies/upcoming"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}