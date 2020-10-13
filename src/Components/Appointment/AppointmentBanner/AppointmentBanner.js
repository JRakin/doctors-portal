import React from 'react';
import Calendar from 'react-calendar';
import Chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';

const AppointmentBanner = ({ handleChange }) => {
  return (
    <main
      style={{ height: '600px', width: '100%' }}
      className="row d-flex align-items-center"
    >
      <div className="col-md-4 offset-md-1">
        <h1>Appointment</h1>
        <Calendar onChange={handleChange} value={new Date()} />
      </div>
      <div className="col-md-6">
        <img src={Chair} alt="" className="img-fluid" />
      </div>
    </main>
  );
};

export default AppointmentBanner;
