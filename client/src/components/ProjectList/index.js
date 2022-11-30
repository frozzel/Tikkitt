import React from 'react';
import { Link } from 'react-router-dom';
import './proList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList} from '@fortawesome/free-solid-svg-icons';

const ProjectList = ({
  projects,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!projects.length) {
    return <h4>No projects Yet!</h4>;
  }

  return (
    <div>
      
      {showTitle && <h4 className='row'>..........{title}</h4>}
      <div className='AllC'>
      {projects &&
        projects.map((project) => (
          
          <div key={project._id} className="row card  card1 mb-3">
            <h4 className="card-header1 p-2 m-0"><FontAwesomeIcon icon={faClipboardList} color="#655C56" size='1.5x' /><span>         {project.projectName}</span></h4>
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
    </div>
  );
};

export default ProjectList;
