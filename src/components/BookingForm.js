import React from 'react';
import { useForm } from 'react-hook-form';
import './BookingForm.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
const BookingForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitForm = (data) => {
    onSubmit(data);
  };

  return (
    <><div className="Booking-page">
      <nav className="navbar">
        <div className="logo">MajesticRides</div>
        <div className="nav-links">
          <a href="/"><FontAwesomeIcon icon={faHome} /> Home</a>
          <a href="/"><FontAwesomeIcon icon={faInfoCircle} /> About</a>
          <a href="/"><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
        </div>
      </nav>
    </div><div className="booking-form-container">

        <div className="booking-form">
          <h2>Book a Horse Ride</h2>

          <form onSubmit={handleSubmit(onSubmitForm)}>

            <div className="form-group">
              <label>
                Select Horse:
                <select {...register("horse", { required: true })}>
                  <option value="">Select...</option>
                  <option value="Ace">Ace</option>
                  <option value="Snow">Snow</option>
                  <option value="Charlie">Charlie</option>
                  <option value="Oreo">Oreo</option>
                </select>
              </label>
              {errors.horse && <p className="error-message">This field is required</p>}
            </div>

            <div className="form-group">
              <label>
                Date:
                <input type="date" {...register("date", { required: true })} />
              </label>
              {errors.date && <p className="error-message">This field is required</p>}
            </div>

            <div className="form-group">
              <label>
                Time:
                <input type="time" {...register("time", { required: true })} />
              </label>
              {errors.time && <p className="error-message">This field is required</p>}
            </div>

            <div className="form-group">
              <label>
                Name:
                <input type="text" {...register("name", { required: true, maxLength: 50 })} />
              </label>
              {errors.name && <p className="error-message">This field is required and should be less than 50 characters</p>}
            </div>

            <div className="form-group">
              <label>
                Email:
                <input type="email" {...register("email", { required: true })} />
              </label>
              {errors.email && <p className="error-message">This field is required</p>}
            </div>

            <div className="form-group">
              <label>
                Phone:
                <input type="tel" {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })} />
              </label>
              {errors.phone && <p className="error-message">This field is required and should be a 10-digit number</p>}
            </div>

            <button className="book_button " type="submit">Submit</button>
          </form>
        </div>
      </div></>
  );
};

export default BookingForm;
