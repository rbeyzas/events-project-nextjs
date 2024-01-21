import EventContent from '@/components/EventDetail/EventContent';
import EventLogistics from '@/components/EventDetail/EventLogistics';
import EventSummary from '@/components/EventDetail/EventSummary';
import { getEventById } from '@/dummy-data';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
export default EventDetailPage;
