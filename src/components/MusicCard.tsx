import { ExternalLink } from 'lucide-react';
import { SpotifyTrack } from '../features/mood/mockData';

interface MusicCardProps {
  track: SpotifyTrack;
}

export const MusicCard = ({ track }: MusicCardProps) => {
  return (
    <div className="bg-dark-surface rounded-2xl shadow-lg overflow-hidden border border-dark-border">
      <div className="p-4">
        <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Hangout, sans-serif' }}>
          {track.name}
        </h3>
        <p className="text-gray-400 mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          {track.artist}
        </p>

        <div className="rounded-xl overflow-hidden mb-4">
          <iframe
            src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="w-full"
          />
        </div>

        <a
          href={`https://open.spotify.com/track/${track.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          <span>Ouvrir dans Spotify</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
