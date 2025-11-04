import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export const Header = ({ title, showBack = false }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 px-6 py-4 flex items-center justify-between border-b border-gray-200">
      {showBack ? (
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      ) : (
        <div className="w-10" />
      )}

      {title && (
        <h1 className="font-bold text-xl text-center" style={{ fontFamily: 'Hangout, sans-serif' }}>
          {title}
        </h1>
      )}

      <div className="w-10" />
    </header>
  );
};
