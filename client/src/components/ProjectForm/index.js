import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_PROJECT } from '../../utils/mutations';
import { QUERY_PROJECTS, QUERY_ME } from '../../utils/queries';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faClipboardList, faGlobe} from '@fortawesome/free-solid-svg-icons';

import Auth from '../../utils/auth';

const ProjectForm = () => {
  const [projectState, setProjectState] = useState({
    projectText: '',
    projectName: '',
  })
  
  

  const [addProject, { error }] = useMutation(ADD_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { projects } = cache.readQuery({ query: QUERY_PROJECTS });

        cache.writeQuery({
          query: QUERY_PROJECTS,
          data: { projects: [addProject, ...projects] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, projects: [...me.projects, addProject] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
   

    try {
      const { data } = await addProject({
        variables: {
          ...projectState
        },
      });
      
    } catch (err) {
      console.error(err);
    }
    setProjectState('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
      setProjectState({
        ...projectState,
        [name]: value,
      })
      
      
    
  };

  return (
    <div>
                    <h4><FontAwesomeIcon icon={faClipboardList} color="#655C56" size='1x' />
      <span>  Create Your New Project!</span></h4>

      {Auth.loggedIn() ? (
        <>
          
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-12">
              <input
                name="projectText"
                placeholder="Project Description!"
                value={projectState.projectText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
              <input
                name="projectName"
                placeholder="Company Name"
                value={projectState.projectName}
                className="form-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>
            <br />
            <div className="col-12 col-lg-3">
              <button className="btn btn-sm btn-primary " type="submit">
                Start
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
          <br /><br /><br /><br />
          <div className='text-center'>
          <FontAwesomeIcon icon={faGlobe} color="#FFE1E1" size='7x' />
          </div>
        </>
      ) : (
        <p>
          You need to be logged in to create a Project. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ProjectForm;
