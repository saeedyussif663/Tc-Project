'use client';

import { paymentMethods, PaymentTypes } from '@/CONSTANTS';
import PaymentMethod from './PaymentMethod';
import { useState } from 'react';
import CardForm from './CardForm';
import MomoForm from './MomoForm';

export default function PaymentInformation() {
  const [paymentType, setPaymentType] = useState<PaymentTypes>('Credit Card');
  return (
    <section className="w-[350px]">
      <h3 className="text-xl font-semibold">Payment Information</h3>
      <article className="mt-4 flex flex-col gap-3">
        <h5 className="text-[#A7A7A7]">Payment Method:</h5>
        <div className="flex flex-col gap-[10px]">
          {paymentMethods.map((method, index) => (
            <PaymentMethod
              key={index}
              paymentType={paymentType}
              setPaymentType={setPaymentType}
              method={method}
            />
          ))}
        </div>
        {paymentType === 'Credit Card' && <CardForm />}
        {paymentType === 'Mobile Money' && <MomoForm />}
      </article>
    </section>
  );
}
