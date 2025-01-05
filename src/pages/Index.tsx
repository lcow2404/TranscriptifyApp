import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useToast } from "@/components/ui/use-toast";
import Microphone from '@/components/Microphone';
import TranscriptDisplay from '@/components/TranscriptDisplay';

const Index = () => {
  const { toast } = useToast();
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const handleToggleListening = () => {
    if (listening) {
      resetTranscript();
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
  };

  const handleDownload = () => {
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'transcript.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    resetTranscript();
    toast({
      title: "Transcript reset",
      description: "Your transcript has been cleared.",
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-white to-gray-50">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browser Not Supported</h1>
          <p className="text-gray-600">
            Sorry, your browser doesn't support speech recognition.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-12 py-8">
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary">Transcriptify</h1>
          <p className="text-lg text-gray-600">Convert your speech to text in real-time</p>
        </div>
        
        <div className="flex justify-center animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse-ring" />
            <Microphone 
              isListening={listening} 
              onClick={handleToggleListening} 
            />
          </div>
        </div>

        <div className="animate-fade-in">
          <TranscriptDisplay
            transcript={transcript}
            onReset={handleReset}
            onDownload={handleDownload}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
