import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">Our <span>Projects</span></h2>
      <div className="projects-container">
        <div className="project-box">
          <h3>Portfolio development</h3>
          <p>Designed a unique website individually.</p>
        </div>
        <div className="project-box">
          <h3>University-jelly</h3>
          <p>Gives an insight of what the University does and the reviews from students.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
