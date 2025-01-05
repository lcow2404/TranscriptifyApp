import React from 'react';
import { Download, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      <div className="min-h-[200px] p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
        <p className="text-gray-600 whitespace-pre-wrap">
          {transcript || "Your transcript will appear here..."}
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="hover:bg-gray-100"
          title="Reset transcript"
        >
          <RefreshCw className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDownload}
          disabled={!transcript}
          className="hover:bg-gray-100"
          title="Download transcript"
        >
          <Download className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default TranscriptDisplay;