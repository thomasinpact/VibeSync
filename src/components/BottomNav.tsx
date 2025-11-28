import { Link, useLocation } from 'react-router-dom';
import { Home, Smile, History } from 'lucide-react';

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-dark-surface border-t border-dark-border z-50">
      <div className="flex justify-around items-center py-3">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-colors ${
            isActive('/') ? 'text-white' : 'text-gray-500'
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
            isActive('/mood') ? 'text-white' : 'text-gray-500'
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
            isActive('/history') ? 'text-white' : 'text-gray-500'
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
