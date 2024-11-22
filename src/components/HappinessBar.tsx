import React from 'react';
import { Heart } from 'lucide-react';

interface HappinessBarProps {
  happiness: number;
}

export function HappinessBar({ happiness }: HappinessBarProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Heart className="w-5 h-5 text-red-500" fill="currentColor" />
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div 
          className="bg-red-500 rounded-full h-4 transition-all duration-500"
          style={{ width: `${happiness}%` }}
        />
      </div>
    </div>
  );
}