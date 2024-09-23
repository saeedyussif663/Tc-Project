import EventListings from '@/components/events/EventListings';

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return <EventListings />;
}
