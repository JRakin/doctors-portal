import React from 'react';

const ServiceDetails = ({ service }) => {
  return (
    <div className="col-md-4 text-center">
      <div className="p-4">
        <img style={{ height: '50px' }} src={service.img} alt="" />
        <h5 className="my-4">{service.title}</h5>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quis.
        </p>
      </div>
    </div>
  );
};

export default ServiceDetails;
