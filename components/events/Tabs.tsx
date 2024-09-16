'use client';

import { useRouter, useSearchParams } from 'next/navigation';

const links = ['All', 'For You', 'Following'];

export default function Tabs() {
  let activeTab;
  const router = useRouter();
  const searchParams = useSearchParams();

  activeTab = searchParams.get('tab');
  if (!activeTab) {
    activeTab = 'For You';
  }

  return (
    <section className="flex gap-8">
      {links.map((link, idx) => (
        <button
          onClick={() => router.push(`/events?tab=${link}`)}
          key={idx}
          className={` ${activeTab === link ? 'rounded-md bg-red-secondary px-4 py-1 text-white' : 'text-gray'} `}
        >
          {link}
        </button>
      ))}
    </section>
  );
}
