import React from 'react';
import { Link } from 'react-router-dom';
import './proList.scss';

const ProjectList = ({
  projects,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!projects.length) {
    return <h3>No projects Yet!</h3>;
  }

  return (
    <div>
      {showTitle && <h4>{title}</h4>}
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="card  card1 mb-3">
            <h4 className="card-header1 p-2 m-0"><p>{project.projectName}</p></h4>
            <div className="card-body1  p-2">
              <p>{project.projectText}</p>
              <Link
              className="btn2 "
              to={`/projects/${project._id}`}
            >
              Collaborate on this Project!
            </Link><br></br>
              {showUsername ? (
                <Link
                  className="card-body1"
                  to={`/profiles/${project.projectAuthor}`}
                >
                  
                  {project.projectAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    {project.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                  {project.createdAt}
                  </span>
                </>
              )}
            
            
            </div>
            
            
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
