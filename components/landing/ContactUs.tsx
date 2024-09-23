import { contactUs } from '@/CONSTANTS';

export default function ContactUs() {
  return (
    <div className="flex flex-col gap-4">
      <h5 className="text-[20px] font-semibold text-[#1A202C]">
        {contactUs.header}
      </h5>
      <div className="flex flex-col gap-3 text-stormy-slate">
        {contactUs.sublinks.map((item, index) => (
          <div key={index} className="flex gap-2">
            <img src={`/icons/${item.icon}`} />
            <span>{item.link}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
