// src/redux/actions.js
export const BOOK_RIDE = 'BOOK_RIDE';

export const bookRide = (booking) => ({
  type: BOOK_RIDE,
  payload: booking,
});
