import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

export function ActionButton({ onClick, disabled, className, icon: Icon, children }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2`}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}