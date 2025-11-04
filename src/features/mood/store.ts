import { create } from 'zustand';
import { MoodType } from '../../config/theme';
import { UserTastes, storageUtils } from '../../utils/storage';
import { SpotifyTrack } from './mockData';

interface MoodStore {
  currentMood: MoodType | null;
  userTastes: UserTastes | null;
  currentTrack: SpotifyTrack | null;
  hasOnboarded: boolean;

  setCurrentMood: (mood: MoodType) => void;
  setUserTastes: (tastes: UserTastes) => void;
  setCurrentTrack: (track: SpotifyTrack) => void;
  completeOnboarding: () => void;
  initializeFromStorage: () => void;
}

export const useMoodStore = create<MoodStore>((set) => ({
  currentMood: null,
  userTastes: null,
  currentTrack: null,
  hasOnboarded: false,

  setCurrentMood: (mood) => set({ currentMood: mood }),

  setUserTastes: (tastes) => {
    storageUtils.saveUserTastes(tastes);
    set({ userTastes: tastes });
  },

  setCurrentTrack: (track) => set({ currentTrack: track }),

  completeOnboarding: () => {
    storageUtils.setHasOnboarded(true);
    set({ hasOnboarded: true });
  },

  initializeFromStorage: () => {
    const tastes = storageUtils.getUserTastes();
    const hasOnboarded = storageUtils.getHasOnboarded();
    set({ userTastes: tastes, hasOnboarded });
  }
}));
