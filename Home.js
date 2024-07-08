import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hi,</h3>
        <h1>We are Tech Digs</h1>
        <p></p>
        <div className="social-media">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <a href="" className="btn">Download CV</a>
      </div>
    </section>
  );
}

export default Home;