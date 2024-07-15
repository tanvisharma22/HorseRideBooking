// src/redux/reducers.js
import { BOOK_RIDE } from './actions';

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_RIDE:
      return {
        ...state,
        bookings: [...state.bookings, action.payload],
      };
    default:
      return state;
  }
};

export default bookingReducer;
