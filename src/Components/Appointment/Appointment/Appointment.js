import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Navbar></Navbar>
      <AppointmentBanner handleChange={handleChange}></AppointmentBanner>
      <BookAppointment date={selectedDate}></BookAppointment>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
