import React from 'react';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        {/* <img src="img/about.jpeg" alt=""> */}
      </div>
      <div className="about-content">
        <h2 className="heading">ABOUT <span>DIGS</span></h2>
        <h3>Portfolio development</h3>
        <p>Tech DIGS is dedicated to providing cutting-edge technology solutions and services. We specialize in web development, mobile app development for Android, iOS, and Windows platforms, and comprehensive software development. Our team is skilled in designing and managing websites, installing and maintaining hardware and software, and offering high-quality IT support services. Additionally, we handle network installations including Wi-Fi and CCTV setups, and support final year students with their project development needs. At Tech DIGS, our goal is to empower businesses and individuals through innovative technology and exceptional service.</p>
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}

export default About;
