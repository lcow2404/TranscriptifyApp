import { TranscriptifyCard } from "@/components/TranscriptifyCard";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">My Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <TranscriptifyCard />
        {/* Add other project cards here */}
      </div>
    </div>
  );
}
