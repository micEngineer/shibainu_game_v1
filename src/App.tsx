import React, { useState } from 'react';
import { Heart, Cookie, CircleDot } from 'lucide-react';
import { HappinessBar } from './components/HappinessBar';
import { ShibaImage } from './components/ShibaImage';
import { ActionButton } from './components/ActionButton';
import { StatusMessage } from './components/StatusMessage';

function App() {
  const [happiness, setHappiness] = useState(50);
  const [isJumping, setIsJumping] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);
  const [treats, setTreats] = useState(3);
  
  const pet = () => {
    setHappiness(prev => Math.min(prev + 10, 100));
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 500);
  };

  const giveTreat = () => {
    if (treats > 0) {
      setTreats(prev => prev - 1);
      setHappiness(prev => Math.min(prev + 15, 100));
    }
  };

  const playBall = () => {
    setHappiness(prev => Math.min(prev + 20, 100));
    setIsSleeping(false);
  };

  const sleep = () => {
    setIsSleeping(!isSleeping);
    if (!isSleeping) {
      setHappiness(prev => Math.min(prev + 30, 100));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">柴犬と遊ぼう！</h1>
          <HappinessBar happiness={happiness} />
        </div>

        <ShibaImage isJumping={isJumping} isSleeping={isSleeping} />

        <div className="grid grid-cols-2 gap-4">
          <ActionButton
            onClick={pet}
            className="bg-pink-500 hover:bg-pink-600"
            icon={Heart}
          >
            なでる
          </ActionButton>
          
          <ActionButton
            onClick={giveTreat}
            disabled={treats === 0}
            className={treats > 0 ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-400'}
            icon={Cookie}
          >
            おやつ ({treats})
          </ActionButton>

          <ActionButton
            onClick={playBall}
            className="bg-blue-500 hover:bg-blue-600"
            icon={CircleDot}
          >
            ボール遊び
          </ActionButton>

          <ActionButton
            onClick={sleep}
            className={isSleeping ? 'bg-purple-600' : 'bg-purple-500 hover:bg-purple-600'}
          >
            {isSleeping ? '起こす' : 'お昼寝'}
          </ActionButton>
        </div>

        <StatusMessage happiness={happiness} />
      </div>
    </div>
  );
}

export default App;