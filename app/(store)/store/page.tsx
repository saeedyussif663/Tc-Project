import LogoutButton from '@/components/ui/logoutButton';
import { authOptions } from '@/lib/utils';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return;
  }

  return (
    <section>
      <h1>Welcome to the store, {session?.user?.name}</h1>
      <h2>{session?.user?.email}</h2>
      <h4>{session?.user?.phone_number}</h4>
      <LogoutButton />
    </section>
  );
}
