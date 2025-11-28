import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoodStore } from '../features/mood/store';
import { MoodType } from '../config/theme';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { MoodPicker } from '../components/MoodPicker';
import { getMusicSuggestion } from '../features/mood/engines';

export const Mood = () => {
  const navigate = useNavigate();
  const { setCurrentMood, setCurrentTrack, userTastes } = useMoodStore();
  const [selectedMood, setSelectedMood] = useState<MoodType | null>(null);

  const handleConfirm = () => {
    if (!selectedMood) return;

    const track = getMusicSuggestion(selectedMood, userTastes);
    setCurrentMood(selectedMood);
    setCurrentTrack(track);
    navigate('/result');
  };

  return (
    <div className="min-h-screen bg-dark-background pb-24">
      <Header title="Comment te sens-tu ?" />

      <div className="pt-20 px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2 mb-8">
            <p
              className="text-lg text-gray-400"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Choisis ton humeur du moment
            </p>
          </div>

          <MoodPicker selectedMood={selectedMood} onSelectMood={setSelectedMood} />

          {selectedMood && (
            <div className="pt-8 animate-fade-in">
              <button
                onClick={handleConfirm}
                className="w-full py-4 px-6 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Découvrir ma musique
              </button>
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
