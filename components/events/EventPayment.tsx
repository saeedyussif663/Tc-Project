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

export default function EventPayment() {
  return (
    <section className="flex w-full flex-col md:h-[81vh]">
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
        <TableBody className="relative">
          <TableRow className="h-[116px] bg-[#F5F5F5] hover:bg-[#F5F5F5]">
            <TableCell className="">RapperHolic Event</TableCell>
            <TableCell>VVIP</TableCell>
            <TableCell>2</TableCell>
            <TableCell className="rounded-e-lg">$200.00</TableCell>
          </TableRow>
          <div className="absolute bottom-0 h-[116px] w-[10px] rounded-s-lg bg-red-secondary"></div>
        </TableBody>
      </Table>
      <Amount />
    </section>
  );
}

function Amount() {
  return (
    <article className="mt-auto flex items-end justify-between">
      <Back />
      <div>
        <div className="flex flex-col gap-2 border-b-[0.5px] border-[#A7A7A7] pb-2">
          <div className="flex items-baseline justify-between gap-4 font-semibold">
            <span className="text-sm text-[#A7A7A7]">Subtotal:</span>
            <p className="font text-xl">$600</p>
          </div>
          <div className="flex items-baseline justify-between gap-4 font-semibold">
            <span className="text-sm text-[#A7A7A7]">Discount:</span>
            <p className="font text-xl">Free</p>
          </div>
        </div>
        <div className="mt-1 flex items-baseline justify-between gap-4 font-semibold">
          <span className="text-2xl">Total:</span>
          <p className="font text-xl">$600</p>
        </div>
      </div>
    </article>
  );
}
