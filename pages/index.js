import NewsletterRegistration from '@/components/Inputs/NewsletterRegistration';
import EventList from '@/components/events/EventList';
import { getFeaturedEvents } from '@/helpers/api-utils';
function HomePage(props) {
  return (
    <div>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
}
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
export default HomePage;
