import { MoodType } from '../../config/theme';
import { UserTastes } from '../../utils/storage';
import { MOCK_TRACKS, TIPS_BY_MOOD, SpotifyTrack } from './mockData';

export const getMusicSuggestion = (mood: MoodType, tastes: UserTastes | null): SpotifyTrack => {
  const moodTracks = MOCK_TRACKS.filter(track => track.mood === mood);

  if (moodTracks.length === 0) {
    return MOCK_TRACKS[0];
  }

  const randomIndex = Math.floor(Math.random() * moodTracks.length);
  return moodTracks[randomIndex];
};

export const getTipsForMood = (mood: MoodType): string[] => {
  return TIPS_BY_MOOD[mood] || TIPS_BY_MOOD.happy;
};
