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

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all duration-300 ${
        selected ? 'ring-4 ring-black ring-offset-2 scale-110' : ''
      }`}
      style={{ backgroundColor: moodData.color }}
    >
      <div
        className={`${pandaSize[size]} bg-white rounded-full flex items-center justify-center`}
        style={{
          width: size === 'lg' ? '90px' : size === 'md' ? '60px' : '36px',
          height: size === 'lg' ? '90px' : size === 'md' ? '60px' : '36px',
          border: `3px solid ${moodData.color}`
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          <circle cx="20" cy="35" r="12" fill="black" />
          <circle cx="80" cy="35" r="12" fill="black" />

          <circle cx="35" cy="50" r="5" fill="black" />
          <circle cx="65" cy="50" r="5" fill="black" />

          <path
            d="M 40 65 Q 50 75 60 65"
            stroke="black"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />

          <ellipse cx="50" cy="57" rx="5" ry="6" fill="black" />
        </svg>
      </div>
    </div>
  );
};
