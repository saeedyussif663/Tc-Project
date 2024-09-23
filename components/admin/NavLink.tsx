'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function NavLink({
  icon,
  name,
}: {
  icon: ReactNode;
  name: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={`/admin/${name}`}
      className={`${pathname === `/admin/${name}` && 'border-b border-b-red-secondary pb-1'} flex w-fit items-center gap-3`}
    >
      <span>{icon}</span>
      <p className="capitalize"> {name}</p>
    </Link>
  );
}
