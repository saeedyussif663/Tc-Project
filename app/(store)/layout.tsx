import { ReactNode } from 'react';

export default function StoreLayout({ children }: { children: ReactNode }) {
  return <main className="mb-10">{children}</main>;
}
