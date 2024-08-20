'use client';

import { useEffect } from 'react';

export default function PasswordScore({ score }: { score: number }) {
  useEffect(() => {}, [score]);

  return (
    <div className="flex gap-1">
      <div
        className={`h-1 w-1/5 rounded-md transition-all ${score >= 20 ? 'bg-green-500 opacity-100' : 'bg-black100 opacity-10'} `}
      ></div>
      <div
        className={`h-1 w-1/5 rounded-md transition-all ${score >= 40 ? 'bg-green-500 opacity-100' : 'bg-black100 opacity-10'} `}
      ></div>
      <div
        className={`h-1 w-1/5 rounded-md transition-all ${score >= 60 ? 'bg-green-500 opacity-100' : 'bg-black100 opacity-10'} `}
      ></div>
      <div
        className={`h-1 w-1/5 rounded-md transition-all ${score >= 80 ? 'bg-green-500 opacity-100' : 'bg-black100 opacity-10'} `}
      ></div>
      <div
        className={`h-1 w-1/5 rounded-md transition-all ${score >= 100 ? 'bg-green-500 opacity-100' : 'bg-black100 opacity-10'} `}
      ></div>
    </div>
  );
}
