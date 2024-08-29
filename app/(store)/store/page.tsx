import LogoutButton from '@/components/ui/logoutButton';
import { authOptions } from '@/lib/utils';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <h1>Welcome to the store, {session?.user?.name}</h1>
      <p>ROLE: {session?.user.role}</p>
      <p>PHONE NUMBER: {session?.user.phone_number}</p>
      <p>EMAIL: {session?.user.email}</p>
      <LogoutButton />
    </section>
  );
}
