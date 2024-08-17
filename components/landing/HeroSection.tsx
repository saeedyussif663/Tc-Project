import Wechat from '../icons/wechat';
import EventCard from './EventCard';

export default function HeroSection() {
  return (
    <section className="relative px-4 font-sans-jarkata md:px-8">
      <div className="absolute -right-[550px] -top-[650px] -z-10 hidden h-[941px] w-[941px] rounded-full border-[100px] border-[#FA5959] opacity-5 md:block"></div>
      <article className="mx-auto flex flex-col items-center gap-10 pt-6 leading-relaxed sm:max-w-[90%] sm:pt-16">
        <h1 className="text-center text-4xl font-bold sm:max-w-5xl sm:text-7xl">
          Unlock Your Next Adventure with Tickets.
        </h1>
        <span className="text-center text-[20px] text-gray-fade">
          Unlock Your Next Adventure with Tickets. Moments. Memories. Your
          Gateway to Unforgettable Experiences! Explore, Discover, and Create
          Lasting Memories with Every Ticket Purchase.
        </span>
        <button className="flex items-center gap-2 rounded-md bg-red-secondary px-10 py-3 font-semibold text-white">
          <Wechat />
          Get Started
        </button>
      </article>
      <section className="w-6xl mx-auto mt-24 flex flex-col flex-wrap items-center justify-between gap-x-6 gap-y-12 px-4 sm:px-8 md:flex-row">
        <EventCard color="bg-red-secondary" />
        <EventCard color="bg-black" />
        <EventCard color="bg-green-light" />
      </section>
      <section className="mx-auto mt-14 flex max-w-6xl flex-col items-center justify-between gap-6">
        <h3 className="text-center font-open-sans text-xl font-semibold sm:text-4xl">
          Customizable products for a seamless experience{' '}
          <span className="font-sans-jarkata sm:block">tailored to you.</span>
        </h3>
        <p className="text-center font-sans-jarkata text-lg text-gray-fade sm:text-2xl">
          Your All-in-One Event Solution. With a tech-forward mindset, our
          beautifully crafted tools cover every aspect of event management.
          Discover our versatile product suite, designed to meet all your event
          needs, whether used individually or integrated seamlessly into a
          unified platform. .
        </p>
      </section>
      <div className="absolute -bottom-[120px] -left-[360px] -z-10 hidden h-[800px] w-[800px] rounded-full border-[100px] border-[#FA5959] opacity-5 md:block"></div>
    </section>
  );
}
