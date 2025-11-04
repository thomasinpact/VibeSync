import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoodStore } from '../features/mood/store';
import { GENRES } from '../config/theme';
import { Header } from '../components/Header';
import { Music2, User } from 'lucide-react';

export const Onboarding = () => {
  const navigate = useNavigate();
  const { setUserTastes, completeOnboarding } = useMoodStore();

  const [step, setStep] = useState(1);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [artists, setArtists] = useState('');

  const toggleGenre = (genre: string) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleComplete = () => {
    const artistList = artists
      .split(',')
      .map((a) => a.trim())
      .filter((a) => a.length > 0);

    setUserTastes({
      genres: selectedGenres,
      artists: artistList
    });

    completeOnboarding();
    navigate('/mood');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
      <Header title="Profil Musical" showBack />

      <div className="pt-20 px-6">
        <div className="max-w-md mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              {step === 1 ? (
                <Music2 className="w-12 h-12 text-black" />
              ) : (
                <User className="w-12 h-12 text-black" />
              )}
            </div>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: 'Hangout, sans-serif' }}
            >
              {step === 1 ? 'Tes genres préférés' : 'Tes artistes favoris'}
            </h2>
            <p
              className="text-gray-600"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              {step === 1
                ? 'Sélectionne au moins 3 genres musicaux'
                : 'Liste tes artistes préférés (séparés par des virgules)'}
            </p>
          </div>

          {step === 1 ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {GENRES.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => toggleGenre(genre)}
                    className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                      selectedGenres.includes(genre)
                        ? 'bg-black text-white scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: 'Quicksand, sans-serif' }}
                  >
                    {genre}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={selectedGenres.length < 3}
                className="w-full py-4 px-6 bg-black text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Suivant ({selectedGenres.length}/3)
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <textarea
                value={artists}
                onChange={(e) => setArtists(e.target.value)}
                placeholder="Ex: Daft Punk, Angèle, The Weeknd"
                className="w-full p-4 rounded-xl border-2 border-gray-200 focus:border-black outline-none resize-none h-32"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 px-6 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-all"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Retour
                </button>
                <button
                  onClick={handleComplete}
                  disabled={artists.trim().length === 0}
                  className="flex-1 py-4 px-6 bg-black text-white rounded-full font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-all"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  Terminer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
