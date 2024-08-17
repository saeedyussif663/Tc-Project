import { benefits } from '@/CONSTANTS';
import BenefitItem from './BenefitItem';
import Image from 'next/image';

export default function Benefits() {
  return (
    <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-10 px-4 font-sans-jarkata md:px-8">
      <article className="flex flex-col items-center justify-center gap-4">
        <h5 className="text-[20px] font-semibold text-red-secondary">
          WHY TC TICKET
        </h5>
        <h2 className="text-center text-4xl font-bold text-[#040815]">
          Easy, Simple, Affordable
        </h2>
        <p className="text-stormy-slate max-w-[712px] text-center text-[20px]">
          Our platform helps your business in managing expenses. These are some
          of the reasons why you should use our platform in managing your
          events.
        </p>
      </article>
      <article className="flex flex-col justify-between gap-x-5 gap-y-10 md:flex-row">
        <div className="flex w-full flex-col gap-6 md:w-1/2">
          {benefits.map((benefit, index) => (
            <BenefitItem key={index} {...benefit} />
          ))}
        </div>
        <div className="relative h-[350px] w-full rounded-xl bg-[#F3F5F7] md:w-1/2">
          <div className="absolute left-10 top-10 h-[80%] w-full">
            <Image src="/images/benefits.png" alt="benefits" fill />
          </div>
        </div>
      </article>
    </section>
  );
}
