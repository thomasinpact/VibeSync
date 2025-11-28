import { MoodType, MOODS } from '../config/theme';

interface PandaMoodIconProps {
  mood: MoodType;
  size?: 'sm' | 'md' | 'lg';
  selected?: boolean;
}

export const PandaMoodIcon = ({ mood, size = 'md', selected = false }: PandaMoodIconProps) => {
  const moodData = MOODS[mood];

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  const pandaSize = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const pandaImage = mood === 'happy' ? '/src/assets/2.png' : '/src/assets/7.png';

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-300 ${
        selected ? 'ring-4 ring-black ring-offset-2 scale-110' : ''
      }`}
      style={{ backgroundColor: moodData.color }}
    >
      <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1">
        <img
          src={pandaImage}
          alt="Panda mood"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};
