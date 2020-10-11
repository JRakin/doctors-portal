import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import {
  faClock,
  faMapMarker,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

const BusinessInfo = () => {
  const infoData = [
    {
      title: 'Opening Hours',
      icon: faClock,
      background: 'primary',
      description: 'Lorem ipsum dolor sit',
    },
    {
      title: 'Visit Our Location',
      icon: faMapMarker,
      background: 'dark',
      description: 'Lorem ipsum dolor',
    },
    {
      title: 'Contact Us Now',
      icon: faPhone,
      background: 'primary',
      description: '+880 111 222 333',
    },
  ];

  return (
    <section className="d-flex justify-content-center">
      <div className="w-75 row">
        {infoData.map((info) => (
          <InfoCard info={info}></InfoCard>
        ))}
      </div>
    </section>
  );
};

export default BusinessInfo;
