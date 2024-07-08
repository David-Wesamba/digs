import React from 'react';

function Skills() {
  return (
    <div className="container">
      <section className="skills-section" id="skills">
        <h2 className="heading">Our <span>Skills</span></h2>
        <div className="skills-container">
          <div className="skill-box">
            <i className="fa-solid fa-code"></i>
            <h3>Programming Languages</h3>
            <p>Python</p>
            <p>JavaScript</p>
            <p>Java</p>
            <p>C++</p>
          </div>
          <div className="skill-box">
            <i className="fa-solid fa-globe"></i>
            <h3>Web Development</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>Node.js</p>
          </div>
          <div className="skill-box">
          <i className="fa-solid fa-database"></i>
          <h3></h3>
          </div>
        </div>
        </section>
    </div>
  );
}

export default Skills;
            
           

