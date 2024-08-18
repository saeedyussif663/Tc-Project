import { faqs } from '@/CONSTANTS';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function FAQs() {
  return (
    <section
      id="FAQs"
      className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-12 px-4 font-sans-jarkata md:px-10"
    >
      <h3 className="text-2xl font-bold md:text-4xl">
        Frequently Asked Questions
      </h3>
      <section className="w-full">
        <Accordion
          className="flex w-full flex-col gap-4"
          type="single"
          collapsible
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              value={index.toString()}
              key={index}
              className="boder-b-0 rounded-md bg-blush-pink px-6"
            >
              <AccordionTrigger className="text-base font-semibold md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </section>
  );
}
