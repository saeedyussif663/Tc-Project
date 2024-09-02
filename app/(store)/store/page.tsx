import Header from '@/components/store/Header';
import LogoutButton from '@/components/ui/logoutButton';
import { authOptions } from '@/lib/utils';
import { getServerSession } from 'next-auth';

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <>
      <Header />
    </>
  );
}
