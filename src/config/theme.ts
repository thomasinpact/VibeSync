export const MOODS = {
  happy: {
    name: 'Joyeux',
    color: '#FBD64C',
    emoji: '😊',
    gradient: 'from-yellow-400 to-yellow-500'
  },
  chill: {
    name: 'Zen',
    color: '#5D64EB',
    emoji: '😌',
    gradient: 'from-blue-500 to-indigo-600'
  },
  energetic: {
    name: 'Énergique',
    color: '#F04840',
    emoji: '🔥',
    gradient: 'from-red-500 to-red-600'
  },
  sad: {
    name: 'Mélancolique',
    color: '#985B9E',
    emoji: '😔',
    gradient: 'from-purple-500 to-purple-600'
  },
  focused: {
    name: 'Concentré',
    color: '#354EB0',
    emoji: '🎯',
    gradient: 'from-blue-700 to-blue-800'
  },
  romantic: {
    name: 'Romantique',
    color: '#F285A1',
    emoji: '💖',
    gradient: 'from-pink-400 to-pink-500'
  },
  calm: {
    name: 'Calme',
    color: '#BBC250',
    emoji: '🍃',
    gradient: 'from-green-400 to-green-500'
  },
  adventurous: {
    name: 'Aventureux',
    color: '#F59935',
    emoji: '🌟',
    gradient: 'from-orange-400 to-orange-500'
  },
  nostalgic: {
    name: 'Nostalgique',
    color: '#EB5F72',
    emoji: '🌸',
    gradient: 'from-rose-400 to-rose-500'
  }
} as const;

export type MoodType = keyof typeof MOODS;

export const GENRES = [
  'Pop',
  'Rock',
  'Hip-Hop',
  'Jazz',
  'Électronique',
  'R&B',
  'Indie',
  'Classique',
  'Metal',
  'Folk',
  'Reggae',
  'Soul'
];

export const FONTS = {
  heading: 'Hangout',
  body: 'Quicksand'
};
