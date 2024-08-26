import { authOptions } from '@/lib/utils';
import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <section>
      <h1>Welcome to the store</h1>
    </section>
  );
}
