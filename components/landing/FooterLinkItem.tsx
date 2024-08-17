import { Links } from '@/CONSTANTS';

export default function FooterLinkItem({ header, sublinks }: Links) {
  return (
    <div className="flex flex-col gap-6 font-sans-jarkata">
      <h5 className="text-[20px] font-semibold">{header}</h5>
      <ul className="flex flex-col gap-4">
        {sublinks.map((link, index) => (
          <li className="text-stormy-slate" key={index}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
