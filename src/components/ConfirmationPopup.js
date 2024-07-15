import React from 'react';
import { motion } from 'framer-motion';
import './ConfirmationPopUp.css'; // Import CSS file for styling

const ConfirmationPopup = ({ booking, onClose }) => {
  const { horse, email } = booking;



  return (
    <motion.div
      className="confirmation-popup"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <div className="popup-content">
        <h2>Booking Confirmed!</h2>
        <p>Thank you for booking a ride with {horse}.</p>
        <p>A calendar invite has been sent to {email}.</p>
        <button className="close-btn" onClick={onClose}>Close</button>
        {/* <button className="calendar-btn" onClick={generateCalendarInvite}>Add to Calendar</button> */}
      </div>
    </motion.div>
  );
};

export default ConfirmationPopup;

