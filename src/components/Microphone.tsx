import React from 'react';
import { Mic } from 'lucide-react';

interface MicrophoneProps {
  isListening: boolean;
  onClick: () => void;
}

const Microphone: React.FC<MicrophoneProps> = ({ isListening, onClick }) => {
  return (
    <div className="relative inline-block">
      {isListening && (
        <div className="absolute inset-0 rounded-full animate-pulse-ring bg-primary/50" />
      )}
      <button
        onClick={onClick}
        className={`p-4 rounded-full transition-colors ${
          isListening
            ? "bg-success text-white hover:bg-success/90"
            : "bg-primary text-white hover:bg-primary/90"
        }`}
      >
        <Mic className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Microphone;