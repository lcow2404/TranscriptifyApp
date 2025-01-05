import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mic } from "lucide-react";

export function TranscriptifyCard() {
  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Mic className="h-6 w-6 text-primary" />
          <CardTitle>Transcriptify</CardTitle>
        </div>
        <CardDescription>Speech-to-Text Converter</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          A responsive web application that converts speech to text in real-time.
          Features include pause/resume functionality, transcript downloads, and
          instant reset capabilities.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            React
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            TypeScript
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Tailwind CSS
          </span>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            Speech Recognition
          </span>
        </div>
      </CardContent>
    </Card>
  );
}