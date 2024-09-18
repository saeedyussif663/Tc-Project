'use server';

export async function cardPayment(
  prevState: {
    err: null | boolean;
  },
  formData: FormData,
) {
  const data = {
    name: formData.get('name'),
    number: formData.get('number'),
    expiration: formData.get('expiration'),
    code: formData.get('code'),
  };
  console.log(data);
  return { err: true };
}
