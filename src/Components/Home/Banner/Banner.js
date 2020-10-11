import React from 'react';
import Chair from '../../../images/chair.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="container-fluid">
      <main
        style={{ height: '600px', width: '100%' }}
        className="row d-flex align-items-center"
      >
        <div className="col-md-4 offset-md-1">
          <h1>
            Your New Smile <br /> Starts Here
          </h1>
          <p className="text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            nobis dicta aperiam alias quasi amet facere ipsum saepe quam nihil
            consequuntur minus earum quae corrupti veniam enim ut, possimus nam?
          </p>
          <button className="btn btn-warning">GET APPOINTMENT</button>
        </div>
        <div className="col-md-6">
          <img src={Chair} alt="" className="img-fluid" />
        </div>
      </main>
    </div>
  );
};

export default Banner;
