import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMoodStore } from '../features/mood/store';
import { MOODS } from '../config/theme';
import { getTipsForMood, getMusicSuggestion } from '../features/mood/engines';
import { storageUtils } from '../utils/storage';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { MusicCard } from '../components/MusicCard';
import { TipCard } from '../components/TipCard';
import { PandaMoodIcon } from '../components/PandaMoodIcon';
import { ThumbsUp, RefreshCw } from 'lucide-react';

export const Result = () => {
  const navigate = useNavigate();
  const { currentMood, currentTrack, userTastes, setCurrentTrack } = useMoodStore();
  const [tips, setTips] = useState<string[]>([]);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (!currentMood || !currentTrack) {
      navigate('/mood');
      return;
    }

    setTips(getTipsForMood(currentMood));
  }, [currentMood, currentTrack, navigate]);

  if (!currentMood || !currentTrack) {
    return null;
  }

  const moodData = MOODS[currentMood];

  const handleLike = () => {
    if (liked) return;

    setLiked(true);
    storageUtils.saveMoodEntry({
      date: new Date().toISOString(),
      mood: currentMood,
      trackId: currentTrack.id,
      trackName: currentTrack.name,
      artistName: currentTrack.artist,
      liked: true
    });
  };

  const handleRefresh = () => {
    const newTrack = getMusicSuggestion(currentMood, userTastes);
    setCurrentTrack(newTrack);
    setLiked(false);
  };

  return (
    <div
      className="min-h-screen pb-24 transition-colors duration-500 bg-dark-background"
    >
      <Header showBack />

      <div className="pt-20 px-6">
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <PandaMoodIcon mood={currentMood} size="lg" />
            </div>
            <div>
              <h2
                className="text-3xl font-bold mb-2"
                style={{ fontFamily: 'Hangout, sans-serif' }}
              >
                {moodData.name}
              </h2>
              <p
                className="text-gray-400"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Voici ta musique du jour
              </p>
            </div>
          </div>

          <MusicCard track={currentTrack} />

          <div className="flex gap-3">
            <button
              onClick={handleLike}
              disabled={liked}
              className={`flex-1 py-3 px-6 rounded-full font-bold transition-all flex items-center justify-center gap-2 border ${
                liked
                  ? 'bg-green-500 text-white border-green-500'
                  : 'bg-dark-surface text-white hover:bg-dark-border hover:scale-105 border-dark-border'
              }`}
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              <ThumbsUp className="w-5 h-5" />
              <span>{liked ? 'Enregistré !' : 'Ça me parle'}</span>
            </button>

            <button
              onClick={handleRefresh}
              className="flex-1 py-3 px-6 bg-dark-surface text-white rounded-full font-bold hover:bg-dark-border transition-all hover:scale-105 flex items-center justify-center gap-2 border border-dark-border"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              <RefreshCw className="w-5 h-5" />
              <span>Autre musique</span>
            </button>
          </div>

          <div className="space-y-3 pt-4">
            <h3
              className="text-xl font-bold text-center"
              style={{ fontFamily: 'Hangout, sans-serif' }}
            >
              Tips pour toi
            </h3>
            {tips.map((tip, index) => (
              <TipCard key={index} tip={tip} color={moodData.color} />
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
