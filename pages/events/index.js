import EventList from '@/components/events/EventList';
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const featuredEvents = getAllEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
export default AllEventsPage;
