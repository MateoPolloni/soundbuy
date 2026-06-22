'use client';

import { useState, useMemo } from 'react';
import { Track } from '@/lib/types';
import TrackCard from './TrackCard';

interface BrowseFiltersProps {
  tracks: Track[];
  genres: string[];
  moods: string[];
}

type SortKey = 'plays' | 'new' | 'price_asc' | 'price_desc';

export default function BrowseFilters({ tracks, genres, moods }: BrowseFiltersProps) {
  const [activeGenre, setActiveGenre] = useState('All');
  const [activeMood, setActiveMood] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortKey>('plays');

  const filtered = useMemo(() => {
    let result = [...tracks];

    if (activeGenre !== 'All') result = result.filter(t => t.genre === activeGenre);
    if (activeMood) result = result.filter(t => t.mood.includes(activeMood));
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.producer.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.includes(q))
      );
    }

    if (sortBy === 'plays') result.sort((a, b) => b.plays - a.plays);
    else if (sortBy === 'new') result.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    else if (sortBy === 'price_asc') result.sort((a, b) => a.licenses.basic - b.licenses.basic);
    else if (sortBy === 'price_desc') result.sort((a, b) => b.licenses.basic - a.licenses.basic);

    return result;
  }, [tracks, activeGenre, activeMood, search, sortBy]);

  return (
    <div>
      {/* Search + Sort */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#48486a]" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="text"
            placeholder="Search tracks, producers, tags..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="form-input pl-11"
          />
        </div>
        <select
          value={sortBy}
          onChange={e => setSortBy(e.target.value as SortKey)}
          className="bg-[#0c0c16] border border-[rgba(124,58,237,0.18)] text-[#8080a8] px-4 py-3.5 text-sm focus:outline-none focus:border-[rgba(124,58,237,0.5)] cursor-pointer transition-colors duration-300 font-mono"
        >
          <option value="plays">Most Played</option>
          <option value="new">Newest</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>

      {/* Genre filter */}
      <div className="flex flex-wrap gap-2 mb-3">
        {genres.map(genre => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`font-display text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300 whitespace-nowrap ${
              activeGenre === genre
                ? 'bg-[#7c3aed] border-[#7c3aed] text-white'
                : 'border-[rgba(124,58,237,0.2)] text-[#8080a8] hover:border-[rgba(124,58,237,0.45)] hover:text-[#eeeeff]'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Mood filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {moods.map(mood => (
          <button
            key={mood}
            onClick={() => setActiveMood(activeMood === mood ? '' : mood)}
            className={`font-mono text-[10px] px-3 py-1.5 border transition-all duration-300 whitespace-nowrap ${
              activeMood === mood
                ? 'bg-[rgba(124,58,237,0.16)] border-[rgba(124,58,237,0.6)] text-[#c084fc]'
                : 'border-[rgba(124,58,237,0.1)] text-[#48486a] hover:border-[rgba(124,58,237,0.3)] hover:text-[#8080a8]'
            }`}
          >
            {mood}
          </button>
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#48486a] mb-6">
        {filtered.length} track{filtered.length !== 1 ? 's' : ''} found
      </p>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="font-display font-extrabold text-2xl text-[#48486a] mb-2">No tracks found</p>
          <p className="text-sm text-[#48486a]">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
