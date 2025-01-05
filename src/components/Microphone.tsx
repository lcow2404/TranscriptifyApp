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
        <>
          <div className="absolute inset-0 rounded-full animate-pulse-ring bg-success/30" />
          <div className="absolute inset-0 rounded-full animate-pulse-ring bg-success/20 animation-delay-150" />
        </>
      )}
      <button
        onClick={onClick}
        className={`p-6 rounded-full transition-all transform hover:scale-105 ${
          isListening
            ? "bg-success text-white shadow-lg shadow-success/30 hover:bg-success/90"
            : "bg-primary text-white shadow-lg shadow-primary/30 hover:bg-primary/90"
        }`}
      >
        <Mic className="w-8 h-8" />
      </button>
    </div>
  );
};

export default Microphone;