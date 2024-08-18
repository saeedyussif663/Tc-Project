import Link from 'next/link';
import { usefulLinks } from '@/CONSTANTS';

export default function UsefulLinks() {
  return (
    <div className="flex w-1/2 flex-col gap-4 md:w-auto">
      <h5 className="text-[20px] font-semibold text-[#1A202C]">
        {usefulLinks.header}
      </h5>
      <ul className="flex flex-col gap-2">
        {usefulLinks.sublinks.map((link, index) => (
          <li key={index} className="text-stormy-slate">
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
