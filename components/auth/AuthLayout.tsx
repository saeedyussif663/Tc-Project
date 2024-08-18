import Image from 'next/image';

export default function AuthLayout() {
  return (
    <section className="my-auto hidden h-[94%] w-1/2 flex-col items-center justify-center rounded-lg bg-red-secondary font-sans-jarkata text-white md:flex">
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/images/auth-logo.png"
          alt="auth-logo"
          width={100}
          height={85}
        />
        <h3 className="text-2xl font-bold">TC TICKET</h3>
      </div>
      <div className="flex flex-col items-center text-[20px]">
        <span>Over 100 million people have attended</span>
        <span>event organised tc ticket</span>
      </div>
    </section>
  );
}
