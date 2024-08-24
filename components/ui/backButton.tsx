'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="text-sm text-red-secondary"
      onClick={() => router.back()}
    >
      Back
    </button>
  );
}
