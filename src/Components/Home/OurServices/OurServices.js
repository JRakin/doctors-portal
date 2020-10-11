import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const OurServices = () => {
  const servicesData = [
    {
      title: 'Fluoride Treatment',
      img: fluoride,
    },
    {
      title: 'Cavity Filling',
      img: cavity,
    },
    {
      title: 'Teeth Whitening',
      img: whitening,
    },
  ];
  return (
    <section className="service-container mt-5">
      <div className="text-center">
        <h5 style={{ color: '#1cc7c1' }}>OUR SERVICES</h5>
        <h1>Services We Provide</h1>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-5 pt-5">
          {servicesData.map((service) => (
            <ServiceDetails service={service}></ServiceDetails>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
