import { Link, useLocation } from 'react-router-dom';
import { Home, Smile, History } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex justify-around items-center py-3">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/') ? 'text-black' : 'text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Accueil
          </span>
        </Link>

        <Link
          to="/mood"
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/mood') ? 'text-black' : 'text-gray-400'
          }`}
        >
          <Smile className="w-6 h-6" />
          <span className="text-xs font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Mood
          </span>
        </Link>

        <Link
          to="/history"
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/history') ? 'text-black' : 'text-gray-400'
          }`}
        >
          <History className="w-6 h-6" />
          <span className="text-xs font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            Historique
          </span>
        </Link>
      </div>
    </nav>
  );
};
