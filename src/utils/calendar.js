// src/utils/calendar.js
import { createEvent } from 'ics';
import emailjs from 'emailjs-com';

export const sendCalendarInvite = (booking) => {
  const event = {
    start: [2023, 7, 12, parseInt(booking.time.split(':')[0]), parseInt(booking.time.split(':')[1])],
    duration: { hours: 1 },
    title: 'Horse Ride Booking',
    description: `Ride with ${booking.horse}`,
    location: 'Horse Riding Stable',
    organizer: { name: 'Horse Ride Booking', email: 'no-reply@horseridebooking.com' },
    attendees: [{ name: booking.name, email: booking.email }],
  };

  createEvent(event, (error, value) => {
    if (error) {
      console.log(error);
      return;
    }

    const templateParams = {
      to_name: booking.name,
      to_email: booking.email,
      ics_content: value,
    };

    emailjs.send('service_id', 'template_id', templateParams, 'user_id')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  });
};
