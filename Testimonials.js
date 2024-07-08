import React from 'react';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="heading">Our <span>Testimonials</span></h2>
      <div className="testimonials-container">
        <div className="testimonial-box">
          <p>"Tech Digs provided exceptional service and helped us build a robust website."</p>
          <h3>Isaac Baraka</h3>
        </div>
        <div className="testimonial-box">
          <p>"Their team is highly skilled and professional."</p>
          <h3>Maureen Mwende</h3>
        </div>
        {/* Add more testimonials as needed */}
      </div>
    </section>
  );
}

export default Testimonials;