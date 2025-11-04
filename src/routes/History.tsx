import { useEffect, useState } from 'react';
import { storageUtils, MoodEntry } from '../utils/storage';
import { MOODS, MoodType } from '../config/theme';
import { Header } from '../components/Header';
import { BottomNav } from '../components/BottomNav';
import { PandaMoodIcon } from '../components/PandaMoodIcon';
import { Calendar, Filter } from 'lucide-react';

export const History = () => {
  const [history, setHistory] = useState<MoodEntry[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<MoodEntry[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<MoodType | 'all'>('all');

  useEffect(() => {
    const data = storageUtils.getMoodHistory();
    setHistory(data);
    setFilteredHistory(data);
  }, []);

  useEffect(() => {
    if (selectedFilter === 'all') {
      setFilteredHistory(history);
    } else {
      setFilteredHistory(history.filter((entry) => entry.mood === selectedFilter));
    }
  }, [selectedFilter, history]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-24">
      <Header title="Historique" />

      <div className="pt-20 px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                selectedFilter === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              <Filter className="w-4 h-4" />
              <span>Tous</span>
            </button>
            {(Object.keys(MOODS) as MoodType[]).map((mood) => (
              <button
                key={mood}
                onClick={() => setSelectedFilter(mood)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                  selectedFilter === mood
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                {MOODS[mood].name}
              </button>
            ))}
          </div>

          {filteredHistory.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <Calendar className="w-16 h-16 mx-auto text-gray-400" />
              <div>
                <h3
                  className="text-xl font-bold text-gray-700"
                  style={{ fontFamily: 'Hangout, sans-serif' }}
                >
                  Aucun historique
                </h3>
                <p
                  className="text-gray-500 mt-2"
                  style={{ fontFamily: 'Quicksand, sans-serif' }}
                >
                  {selectedFilter === 'all'
                    ? 'Commence par choisir ton humeur du jour'
                    : 'Aucune entrée pour cette humeur'}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredHistory.map((entry) => {
                const moodData = MOODS[entry.mood as MoodType];
                return (
                  <div
                    key={entry.id}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <PandaMoodIcon mood={entry.mood as MoodType} size="sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4
                            className="font-bold text-lg truncate"
                            style={{ fontFamily: 'Hangout, sans-serif' }}
                          >
                            {entry.trackName}
                          </h4>
                          {entry.liked && (
                            <span className="text-green-500">❤️</span>
                          )}
                        </div>
                        <p
                          className="text-gray-600 text-sm mb-2"
                          style={{ fontFamily: 'Quicksand, sans-serif' }}
                        >
                          {entry.artistName}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span
                            className="px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: `${moodData.color}20`,
                              color: moodData.color,
                              fontFamily: 'Quicksand, sans-serif'
                            }}
                          >
                            {moodData.name}
                          </span>
                          <span style={{ fontFamily: 'Quicksand, sans-serif' }}>
                            {formatDate(entry.date)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};
