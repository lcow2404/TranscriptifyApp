import React from 'react';
import { Download, RefreshCw } from 'lucide-react';

interface TranscriptDisplayProps {
  transcript: string;
  onReset: () => void;
  onDownload: () => void;
}

const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({
  transcript,
  onReset,
  onDownload,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <div className="min-h-[200px] p-4 bg-white rounded-lg shadow-sm border">
        {transcript || "Your transcript will appear here..."}
      </div>
      <div className="flex justify-end gap-2">
        <button
          onClick={onReset}
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          title="Reset transcript"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
        <button
          onClick={onDownload}
          className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          disabled={!transcript}
          title="Download transcript"
        >
          <Download className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TranscriptDisplay;