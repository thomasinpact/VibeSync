export interface UserTastes {
  genres: string[];
  artists: string[];
}

export interface MoodEntry {
  id: string;
  date: string;
  mood: string;
  trackId: string;
  trackName: string;
  artistName: string;
  liked: boolean;
}

const STORAGE_KEYS = {
  USER_TASTES: 'vibesync_user_tastes',
  MOOD_HISTORY: 'vibesync_mood_history',
  HAS_ONBOARDED: 'vibesync_has_onboarded'
};

export const storageUtils = {
  saveUserTastes: (tastes: UserTastes) => {
    localStorage.setItem(STORAGE_KEYS.USER_TASTES, JSON.stringify(tastes));
  },

  getUserTastes: (): UserTastes | null => {
    const data = localStorage.getItem(STORAGE_KEYS.USER_TASTES);
    return data ? JSON.parse(data) : null;
  },

  saveMoodEntry: (entry: Omit<MoodEntry, 'id'>) => {
    const history = storageUtils.getMoodHistory();
    const newEntry: MoodEntry = {
      ...entry,
      id: Date.now().toString()
    };
    history.unshift(newEntry);
    localStorage.setItem(STORAGE_KEYS.MOOD_HISTORY, JSON.stringify(history));
  },

  getMoodHistory: (): MoodEntry[] => {
    const data = localStorage.getItem(STORAGE_KEYS.MOOD_HISTORY);
    return data ? JSON.parse(data) : [];
  },

  updateMoodEntryLiked: (id: string, liked: boolean) => {
    const history = storageUtils.getMoodHistory();
    const entry = history.find(e => e.id === id);
    if (entry) {
      entry.liked = liked;
      localStorage.setItem(STORAGE_KEYS.MOOD_HISTORY, JSON.stringify(history));
    }
  },

  setHasOnboarded: (value: boolean) => {
    localStorage.setItem(STORAGE_KEYS.HAS_ONBOARDED, JSON.stringify(value));
  },

  getHasOnboarded: (): boolean => {
    const data = localStorage.getItem(STORAGE_KEYS.HAS_ONBOARDED);
    return data ? JSON.parse(data) : false;
  },

  clearAll: () => {
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
  }
};
