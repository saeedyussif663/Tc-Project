'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function createUserAction(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const data = {
    email: formData.get('email'),
    name: formData.get('name') as string,
    phone_number: formData.get('phone_number'),
    password: formData.get('password'),
  };

  if (data.name.length < 3) {
    return { message: 'name should be more than 3 characters' };
  }
  const response = await fetch(`${process.env.baseUrl}/api/v1/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const res = await response.json();
  if (response.status === 400) {
    return { message: res.user_msg };
  }

  if (response.status === 422) {
    return { message: res.detail };
  }

  if (response.status === 500) {
    throw new Error('An error occured creating user');
  }

  const session = {
    phone_number: res?.data?.user.phone_number,
    token: res?.data?.access_token,
  };
  const expires = new Date(res?.data?.expires);
  cookies().set('session', JSON.stringify(session), {
    expires,
    httpOnly: true,
  });
  redirect('/ottp');
}

export async function resendOTTP(formData: FormData) {
  try {
    const data = cookies().get('session')?.value;
    if (data) {
      const session = JSON.parse(data);
      const response = await fetch(
        `${process.env.baseUrl}/api/v1/users/resend-otp/`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        },
      );

      const res = await response.json();
      console.log(res);
    }
  } catch (error) {
    throw new Error('An error occured sending OTTP');
  }
}

export async function sendOTTp(
  prevState: {
    message: string;
  },
  formData: FormData,
) {
  const data = cookies().get('session')?.value;

  if (!data) {
    return { message: '' };
  }

  const session = JSON.parse(data);
  const value = formData.get('value');

  const response = await fetch(
    `https://ticket-backend-production.up.railway.app/api/v1/users/verify/${value}`,
    {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        Authorization: `Bearer ${session.token}`,
        'Content-Type': 'application/json',
      },
    },
  );

  const res = await response.json();

  console.log(res);

  if (response.status === 400) {
    return { message: res.user_msg };
  }

  if (response.status === 200) {
    redirect('/signin');
  }

  if (!res.ok) {
    return { message: 'An error occured try again' };
  }

  console.log(res);

  return { message: '' };
}

export async function getSession() {
  const session = cookies().get('session')?.value;
  if (!session) return null;
  return JSON.parse(session);
}
