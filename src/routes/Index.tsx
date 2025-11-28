import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoodStore } from '../features/mood/store';
import { Smile } from 'lucide-react';

export const Index = () => {
  const navigate = useNavigate();
  const { hasOnboarded, initializeFromStorage } = useMoodStore();

  useEffect(() => {
    initializeFromStorage();
  }, [initializeFromStorage]);

  const handleStart = () => {
    if (hasOnboarded) {
      navigate('/mood');
    } else {
      navigate('/onboarding');
    }
  };

  return (
    <div className="min-h-screen bg-dark-background flex flex-col items-center justify-center p-6">
      <div className="text-center space-y-8 max-w-md">
        <div className="flex justify-center mb-8">
          <img
            src="/src/assets/vibesync logo (1).svg"
            alt="VibeSync Logo"
            className="w-48 h-48 object-contain"
          />
        </div>

        <div className="space-y-4">
          <h1
            className="text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'Hangout, sans-serif' }}
          >
            VibeSync
          </h1>
          <p
            className="text-lg text-gray-400 leading-relaxed"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Ta musique quotidienne selon ton humeur
          </p>
        </div>

        <div className="space-y-4 pt-8">
          <button
            onClick={handleStart}
            className="w-full py-4 px-6 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-3 shadow-lg"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            <Smile className="w-6 h-6" />
            <span>Commencer</span>
          </button>

          <p
            className="text-sm text-gray-400 px-4"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            Découvre chaque jour une nouvelle musique personnalisée
          </p>
        </div>
      </div>
    </div>
  );
};
