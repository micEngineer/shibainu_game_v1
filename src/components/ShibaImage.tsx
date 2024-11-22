import React from 'react';

interface ShibaImageProps {
  isJumping: boolean;
  isSleeping: boolean;
}

export function ShibaImage({ isJumping, isSleeping }: ShibaImageProps) {
  return (
    <div className="relative flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80"
        alt="Shiba Inu"
        className={`w-64 h-64 object-cover rounded-full border-4 border-yellow-300 transition-transform duration-500 ${
          isJumping ? 'transform -translate-y-4' : ''
        } ${isSleeping ? 'opacity-75' : ''}`}
      />
      {isSleeping && (
        <div className="absolute top-0 right-0 text-4xl">💤</div>
      )}
    </div>
  );
}