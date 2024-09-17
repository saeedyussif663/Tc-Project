'use client';

import { tableHeadings } from '@/CONSTANTS';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import Back from './Back';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function EventPayment() {
  const [ticketAmount, setTicketAmount] = useState<number>(1);

  function decrementAmount() {
    if (ticketAmount === 1) {
      setTicketAmount(1);
      return;
    }
    setTicketAmount((prev) => prev - 1);
  }

  function incrementAmount() {
    setTicketAmount((prev) => prev + 1);
  }

  return (
    <section className="flex w-full flex-col gap-10 md:h-[81vh]">
      <Table>
        <TableHeader>
          <TableRow className="mb-5 text-black hover:bg-transparent">
            {tableHeadings.map((heading, index) => (
              <TableHead className="first:w-1/2" key={index}>
                {heading}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="h-[136px] rounded-s-lg bg-[#F5F5F5] hover:bg-[#F5F5F5]">
            <TableCell className="relative flex h-[136px] items-center justify-center gap-3 rounded-s-lg pl-4 md:pl-5">
              <Image
                src="/images/eventImage.png"
                alt="Event Image"
                width={139}
                height={89}
                className="mr-4 inline-block h-[89px]"
              />
              <div className="flex flex-col gap-[2px] font-open-sans">
                <h5 className="font-sans-jarkata font-semibold">
                  RapperHolic Event
                </h5>
                <p className="line-clamp-2 text-[12px] text-red-secondary">
                  24th April 2024 19: 00 GMT - 28th April 2024 21:00 GMT
                </p>
                <p className="text-[10px] text-[#818181]">
                  National Conference, Accra Ghana
                </p>
                <p className="text-[10px] text-[#818181]">Hosted by TcTicket</p>
              </div>
              {/* <div className="absolute -left-2 z-40 h-full w-[10px] rounded-s-lg bg-red-secondary"></div> */}
            </TableCell>
            <TableCell className="text-center">
              <select className="ml-3 w-full bg-transparent text-center outline-none md:ml-0 md:w-3/4 md:text-left">
                <option value="Regular">Regular</option>
                <option value="VVIP" selected>
                  VVIP
                </option>
              </select>
            </TableCell>
            <TableCell className="text-center md:text-left">
              <Minus
                className="inline-block cursor-pointer"
                strokeWidth={1}
                size={15}
                onClick={decrementAmount}
              />
              <span className="mx-2 select-none md:mx-4">{ticketAmount}</span>
              <Plus
                className="inline-block cursor-pointer"
                strokeWidth={1}
                size={15}
                onClick={incrementAmount}
              />
            </TableCell>
            <TableCell className="rounded-e-lg">$200.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Amount ticketAmount={ticketAmount} price={200} />
    </section>
  );
}

function Amount({
  ticketAmount,
  price,
}: {
  ticketAmount: number;
  price: number;
}) {
  return (
    <article className="mt-auto flex items-end justify-between">
      <Back />
      <div>
        <div className="flex flex-col gap-2 border-b-[0.5px] border-[#A7A7A7] pb-2">
          <div className="flex items-baseline justify-between gap-4 font-semibold">
            <span className="text-sm text-[#A7A7A7]">Subtotal:</span>
            <p className="font text-lg md:text-xl">${price * ticketAmount}</p>
          </div>
          <div className="flex items-baseline justify-between gap-4 font-semibold">
            <span className="text-sm text-[#A7A7A7]">Discount:</span>
            <p className="font text-lg md:text-xl">Free</p>
          </div>
        </div>
        <div className="mt-1 flex items-baseline justify-between gap-4 font-semibold">
          <span className="text-lg md:text-2xl">Total:</span>
          <p className="font text-lg md:text-xl">${price * ticketAmount}</p>
        </div>
      </div>
    </article>
  );
}
