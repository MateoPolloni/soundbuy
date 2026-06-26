import { tracks, genres, moods } from '@/lib/data/tracks';
import BrowseFilters from '@/components/ui/BrowseFilters';

export default function BrowsePage() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-8 md:px-14">
        <div className="mb-12">
          <div className="section-label">Marketplace</div>
          <h1
            className="font-display font-extrabold leading-[1.15] tracking-tight text-balance mb-3"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            <span className="text-[#eeeeff]">Browse</span>{' '}
            <span className="text-outline-sm">Tracks</span>
          </h1>
          <p className="text-[#8080a8] text-sm">
            Discover {tracks.length} premium tracks from world-class producers
          </p>
        </div>

        <BrowseFilters tracks={tracks} genres={genres} moods={moods} />
      </div>
    </div>
  );
}
