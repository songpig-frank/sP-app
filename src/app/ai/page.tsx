'use client';
import { AIService } from '@/lib/ai-service';
import { useState } from 'react';

export default function AIPage() {
  const [lyrics, setLyrics] = useState('');

  const generateLyrics = async () => {
    const ai = new AIService();
    const result = await ai.generateLyrics('love', 'pop');
    setLyrics(result.lyrics);
  };

  return (
    <div className="p-4">
      <button 
        onClick={generateLyrics}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Generate Lyrics
      </button>
      <pre className="mt-4 p-4 bg-gray-100 rounded">{lyrics}</pre>
    </div>
  );
} 