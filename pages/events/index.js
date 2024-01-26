import EventList from '@/components/events/EventList';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '@/components/events/EventsSearch';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;
