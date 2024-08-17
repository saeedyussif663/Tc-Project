import { Benefits } from '@/CONSTANTS';

export default function BenefitItem({ heading, text, icon_name }: Benefits) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md bg-red-secondary">
        <img src={`/icons/${icon_name}`} />
      </div>
      <div className="flex w-4/5 flex-col">
        <h5 className="text-[20px] font-semibold">{heading}</h5>
        <p className="text-stormy-slate">{text}</p>
      </div>
    </div>
  );
}
