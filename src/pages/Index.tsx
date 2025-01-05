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
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleDownload = () => {
    if (!transcript) return;
    
    const element = document.createElement("a");
    const file = new Blob([transcript], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "transcript.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Success",
      description: "Transcript downloaded successfully!",
    });
  };

  const handleReset = () => {
    resetTranscript();
    toast({
      title: "Reset",
      description: "Transcript has been cleared.",
    });
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Browser Not Supported</h1>
          <p className="text-gray-600">
            Sorry, your browser doesn't support speech recognition.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900">Transcriptify</h1>
          <p className="text-gray-600">Convert your speech to text in real-time</p>
        </div>
        
        <div className="flex justify-center">
          <Microphone 
            isListening={listening} 
            onClick={handleToggleListening} 
          />
        </div>

        <TranscriptDisplay
          transcript={transcript}
          onReset={handleReset}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
};

export default Index;