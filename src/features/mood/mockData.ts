import { MoodType } from '../../config/theme';

export interface SpotifyTrack {
  id: string;
  name: string;
  artist: string;
  mood: MoodType;
}

export const MOCK_TRACKS: SpotifyTrack[] = [
  { id: '3n3Ppam7vgaVa1iaRUc9Lp', name: 'Mr. Blue Sky', artist: 'Electric Light Orchestra', mood: 'happy' },
  { id: '5CQ30WqJwcep0pYcV4AMNc', name: "Stayin' Alive", artist: 'Bee Gees', mood: 'happy' },
  { id: '60nZcImufyMA1MKQY3dcCH', name: 'September', artist: 'Earth, Wind & Fire', mood: 'happy' },

  { id: '2374M0fQpWi3dLnB54qaLX', name: 'Weightless', artist: 'Marconi Union', mood: 'chill' },
  { id: '1CS7Sd1u5tWkstBhpssyjP', name: 'Breathe', artist: 'Pink Floyd', mood: 'chill' },
  { id: '3AJwUDP919kvQ9QcozQPxg', name: 'Intro', artist: 'The xx', mood: 'chill' },

  { id: '0VjIjW4GlUZAMYd2vXMi3b', name: "Blinding Lights", artist: 'The Weeknd', mood: 'energetic' },
  { id: '3qiyyUfYe7CRYLucrPmulD', name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', mood: 'energetic' },
  { id: '7qiZfU4dY1lWllzX7mPBI', name: "Don't Stop Me Now", artist: 'Queen', mood: 'energetic' },

  { id: '1BxfuPKGuaTgP7aM0Bbdwr', name: 'Hurt', artist: 'Johnny Cash', mood: 'sad' },
  { id: '3JOVTQ5h8HGFnDdp4VT3MP', name: 'Someone Like You', artist: 'Adele', mood: 'sad' },
  { id: '7lPN2DXiMsVn7XUKtOW1CS', name: 'Mad World', artist: 'Gary Jules', mood: 'sad' },

  { id: '4uLU6hMCjMI75M1A2tKUQC', name: 'Never Gonna Give You Up', artist: 'Rick Astley', mood: 'nostalgic' },
  { id: '2374M0fQpWi3dLnB54qaLX', name: 'Africa', artist: 'Toto', mood: 'nostalgic' },
  { id: '5IVuqXILoxVWvWEPm82Jxr', name: 'Wonderwall', artist: 'Oasis', mood: 'nostalgic' },

  { id: '5odlY52u43F5BjByhxg7wg', name: 'Thinking Out Loud', artist: 'Ed Sheeran', mood: 'romantic' },
  { id: '1dGr1c8CrMLDpV6mPbImSI', name: 'Lover', artist: 'Taylor Swift', mood: 'romantic' },
  { id: '37ZJ0p5Jm13JPevGcx4SkF', name: 'Perfect', artist: 'Ed Sheeran', mood: 'romantic' },

  { id: '0DiWol3AO6WpXZgp0goxAV', name: 'One More Time', artist: 'Daft Punk', mood: 'adventurous' },
  { id: '7xGfFoTpQ2E7fRF5lN10tr', name: 'High Hopes', artist: 'Panic! At The Disco', mood: 'adventurous' },
  { id: '6habFhsOp2NvshLv26DqMb', name: 'Thunder', artist: 'Imagine Dragons', mood: 'adventurous' },

  { id: '3TVXtAsR1Inumwj472S9r4', name: 'Lofi Study', artist: 'ChilledCow', mood: 'focused' },
  { id: '2Fxmhks0bxGSBdJ92vM42m', name: 'Time', artist: 'Hans Zimmer', mood: 'focused' },
  { id: '1Cv1YLb4q0RzL6pybtaMLo', name: 'Clair de Lune', artist: 'Debussy', mood: 'focused' },

  { id: '3KkXRkHbMCARz0aVfEt68P', name: 'Sunday Morning', artist: 'Maroon 5', mood: 'calm' },
  { id: '6PGoSes0D9eUDeeAafB2As', name: 'Better Together', artist: 'Jack Johnson', mood: 'calm' },
  { id: '5knuzwU65gJK7IF5yJsuaW', name: 'The A Team', artist: 'Ed Sheeran', mood: 'calm' }
];

export const TIPS_BY_MOOD: Record<MoodType, string[]> = {
  happy: [
    'Danse comme si personne ne regardait 💃',
    'Partage ta bonne humeur avec un proche',
    'Écoute cette chanson à fond et chante à tue-tête'
  ],
  chill: [
    'Prends une grande respiration et détends-toi 🧘',
    'Trouve un coin confortable et profite du moment',
    'Savoure une boisson chaude en écoutant'
  ],
  energetic: [
    'Bouge ton corps, fais du sport ! 🏃',
    'Profite de cette énergie pour accomplir tes objectifs',
    'Organise une activité dynamique avec des amis'
  ],
  sad: [
    'C\'est ok de ressentir ça, prends ton temps 💙',
    'Écris tes pensées dans un journal',
    'Appelle quelqu\'un en qui tu as confiance'
  ],
  focused: [
    'Élimine les distractions autour de toi 🎯',
    'Fais des pauses de 5 min toutes les 25 minutes',
    'Hydrate-toi régulièrement pendant ta session'
  ],
  romantic: [
    'Envoie un message doux à quelqu\'un de spécial 💕',
    'Prépare un moment intime et chaleureux',
    'Écris une lettre d\'amour, même si tu ne l\'envoies pas'
  ],
  calm: [
    'Marche dans la nature si possible 🌿',
    'Pratique la méditation ou le yoga',
    'Lis un livre qui te fait du bien'
  ],
  adventurous: [
    'Essaie quelque chose de nouveau aujourd\'hui 🌟',
    'Explore un endroit que tu ne connais pas',
    'Sors de ta zone de confort avec bienveillance'
  ],
  nostalgic: [
    'Regarde de vieilles photos et souris 📸',
    'Reconnecte avec un ami d\'enfance',
    'Visite un lieu qui te rappelle de bons souvenirs'
  ]
};
