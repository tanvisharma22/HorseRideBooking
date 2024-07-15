import React from 'react';
import './LandingPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import horse1 from '../assets/images/horse1.jpg';
import horse2 from '../assets/images/horse2.jpg';
import horse3 from '../assets/images/horse3.jpg';
import horse4 from '../assets/images/horse4.jpg';
const LandingPage = ({ onBookNow }) => {
  const horses = [
    { id: 1, name: 'Ace', image: horse1, imagePath: '../../assets/images/horse1.jpg' },
    { id: 2, name: 'Snow', image: horse2, imagePath: '../../assets/images/horse2.jpg' },
    { id: 3, name: 'Charlie', image: horse3, imagePath: '../../assets/images/horse3.jpg' },
    { id: 4, name: 'Oreo', image: horse4, imagePath: '../../assets/images/horse4.jpg' },
  ];
  

  return (
    <div className="landing-page">
        <nav className="navbar">
        <div className="logo">MajesticRides</div>
        <div className="nav-links">
          <a href="#"><FontAwesomeIcon icon={faHome} /> Home</a>
          <a href="#"><FontAwesomeIcon icon={faInfoCircle} /> About</a>
          <a href="#"><FontAwesomeIcon icon={faEnvelope} /> Contact</a>
        </div>
      </nav>
        
      <div className="content">
        <h1>Welcome to Horse Ride Booking</h1>
        <div className="horse-grid">
          {horses.map((horse) => (
            <div key={horse.id} className="horse-card">
              <img src={horse.image} alt={horse.name} />
              <h2>{horse.name}</h2>
            </div>
          ))}
        </div>
        <button className="book-now-button" onClick={onBookNow}>Book Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
