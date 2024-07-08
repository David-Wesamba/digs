import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faAppStoreIos, faWindows, faUncharted } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
          <h3>INSTALLATIONS:</h3>
          <p>WIFI Installation(<FontAwesomeIcon icon={faWifi} />)</p>
          <p>Software Installations(Ms Office)</p>
          <p>ACLS</p>
          <p>CCTV Installation</p>
        </div>

        <div className="services-box">
          <FontAwesomeIcon icon={faComputer} />
          <h3>HARDWARE:</h3>
          <p>Installation and Maintenance</p>
          <p>Repair</p>
        </div>
               
        <div className="services-box">
          <FontAwesomeIcon icon={faUncharted} />
          <h3>SOFTWARE:</h3>
          <p>Development</p>
          <p>Installation and Maintenance</p>
        </div>

        <div className="services-box">
          <h3>FINAL YEAR PROJECTS</h3>
        </div>
      </div>
    </section>
  );
};

export default Services;
