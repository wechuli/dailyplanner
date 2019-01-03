import React from "react";

const ProjectSummary = props => {
  const { project } = props;

  return (
    <div>
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by the Net Ninjaf</p>
          <p className="grey-text">3rd January, 2 am</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
