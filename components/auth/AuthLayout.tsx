import Image from 'next/image';

export default function AuthLayout() {
  return (
    <section className="my-auto hidden h-[94%] w-1/2 flex-col justify-around rounded-lg bg-red-secondary pl-12 font-sans-jarkata text-white md:flex">
      <h1 className="font-space-grotesk text-2xl font-bold">Tc Ticket</h1>
      <div className="mt-8 font-sans-jarkata">
        <h2 className="text-[32px] font-medium">
          Start your <br />
          journey with us.
        </h2>
        <p className="mt-4 text-xl">
          Over 100 million people have attended <br />
          event organised tc ticket
        </p>
      </div>
      <div className="w-4/5 rounded-md bg-[#C7363C] px-6 py-4">
        <p className="text-[15px]">
          Simply unbeliunbelievable! I am really satisfied with my projects and
          business. This is abosolutely wonderful and fantastic!
        </p>

        <div className="mt-4 flex gap-4">
          <Image
            src="/images/feedback.jpg"
            className="rounded-md"
            alt="User"
            width={74}
            height={63}
          />

          <div className="font-sans-jarkata text-[15px]">
            <h5 className="font-semibold">Selorm Agili Saeed</h5>
            <p>Team Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}
