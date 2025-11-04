import { MoodType, MOODS } from '../config/theme';
import { PandaMoodIcon } from './PandaMoodIcon';

interface MoodPickerProps {
  selectedMood: MoodType | null;
  onSelectMood: (mood: MoodType) => void;
}

export const MoodPicker = ({ selectedMood, onSelectMood }: MoodPickerProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full max-w-md mx-auto">
      {(Object.keys(MOODS) as MoodType[]).map((mood) => (
        <button
          key={mood}
          onClick={() => onSelectMood(mood)}
          className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all hover:scale-105 active:scale-95"
        >
          <PandaMoodIcon mood={mood} size="md" selected={selectedMood === mood} />
          <span
            className="text-sm font-semibold text-center"
            style={{ fontFamily: 'Quicksand, sans-serif' }}
          >
            {MOODS[mood].name}
          </span>
        </button>
      ))}
    </div>
  );
};
