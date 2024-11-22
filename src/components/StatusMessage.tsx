import React from 'react';

interface StatusMessageProps {
  happiness: number;
}

export function StatusMessage({ happiness }: StatusMessageProps) {
  return (
    <div className="text-center text-sm text-gray-600">
      {happiness < 30 && '柴犬は少し退屈そうです...'}
      {happiness >= 30 && happiness < 70 && '柴犬は楽しそうです！'}
      {happiness >= 70 && '柴犬はとても幸せそうです！'}
    </div>
  );
}