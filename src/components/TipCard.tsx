import { Sparkles } from 'lucide-react';

interface TipCardProps {
  tip: string;
  color: string;
}

export const TipCard = ({ tip, color }: TipCardProps) => {
  return (
    <div
      className="p-4 rounded-xl transition-transform hover:scale-105"
      style={{ backgroundColor: `${color}15` }}
    >
      <div className="flex items-start gap-3">
        <Sparkles className="w-5 h-5 flex-shrink-0 mt-1" style={{ color }} />
        <p className="text-sm leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          {tip}
        </p>
      </div>
    </div>
  );
};
