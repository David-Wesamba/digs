import React from 'react';

function AboutMembers() {
  return (
    <section className="about-members" id="about-members">
      <h2 className="heading">Our <span>Team</span></h2>
      <div className="members-container">
        <div className="member-box">
          <img src="src/imgs/profile1.jpg" alt="Member 1" />
          <h3>Stephen Mukhebi</h3>
        </div>
        <div className="member-box">
          <img src="imgs/profile2.jpg" alt="Member 2" />
          <h3>David Wesamba</h3>
        </div>
        <div className="member-box">
          <img src="imgs/profile3.jpg" alt="Member 3" />
          <h3>Gideon Kareithi</h3>
        </div>
        <div className="member-box">
          <img src="imgs/profile4.jpg" alt="Member 4" />
          <h3>Hannibal Osore</h3>
        </div>
        <div className="member-box">
          <img src="imgs/profile5.jpg" alt="Member 5" />
          <h3>Nimrod Ouko</h3>
        </div>
        <div className="member-box">
          <img src="imgs/profile6.jpg" alt="Member 6" />
          <h3>Ian Sharmah</h3>
        </div>
        <div className="member-box">
          <img src="imgs/profile7.jpg" alt="Member 7" />
          <h3>Jeff Opiyo</h3>
        </div>
      </div>
    </section>
  );
}

export default AboutMembers;