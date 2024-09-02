import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex w-full justify-between border border-red-500 px-8 py-4">
      <div className="flex gap-2 font-space-grotesk">
        <Image src="/images/other-logo.png" alt="Logo" width={33} height={28} />
        <h1 className="text-2xl font-bold text-red-secondary">Tc Ticket</h1>
      </div>
      <div>
        <input type="text" name="search" placeholder="Search events" />
      </div>
      <div>icons</div>
    </header>
  );
}
