import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title-{id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            vitae! Omnis fuga repellendus minima voluptas. Cumque reprehenderit,
            distinctio illo nulla error est repellat eum! Molestiae dolor hic
            possimus quaerat porro?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Wechuli</div>
          <div>2nd January 2019</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
