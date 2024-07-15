// src/App.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookRide } from './redux/actions';
import LandingPage from './components/LandingPage';
import BookingForm from './components/BookingForm';
import ConfirmationPopup from './components/ConfirmationPopup';
import { AnimatePresence, motion } from 'framer-motion';
import { sendCalendarInvite } from './utils/calendar';

const App = () => {
  const [isBooking, setIsBooking] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const dispatch = useDispatch();

  const handleBookNow = () => setIsBooking(true);
  const handleBookingSubmit = (booking) => {
    dispatch(bookRide(booking));
    setCurrentBooking(booking);
    sendCalendarInvite(booking);
    setIsBooking(false);
    setIsConfirmed(true);
  };
  const handleClosePopup = () => setIsConfirmed(false);

  return (
    <div className="app">
      <AnimatePresence>
        {!isBooking && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LandingPage onBookNow={handleBookNow} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isBooking && (
          <motion.div
            key="booking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BookingForm onSubmit={handleBookingSubmit} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isConfirmed && (
          <ConfirmationPopup booking={currentBooking} onClose={handleClosePopup} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
