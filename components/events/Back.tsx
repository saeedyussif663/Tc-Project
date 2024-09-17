'use client';

import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Back() {
  const router = useRouter();
  return (
    <div
      className="flex cursor-pointer items-center justify-center gap-2 text-lg font-medium md:text-xl"
      onClick={() => router.back()}
    >
      <ChevronLeft size={16} strokeWidth={3} className="mt-1" />
      <span>Go Back</span>
    </div>
  );
}
