import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import TikkitList from '../components/TikkitList';
import TikkitForm from '../components/TikkitForm';

import { QUERY_SINGLE_PROJECT } from '../utils/queries';

const SingleProject = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { projectId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PROJECT, {
    // pass URL parameter
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-3 p-4">
      <h3 className="card-header1  p-2 m-0  " style={{color: '#655C56'}}>
        {project.projectAuthor} <br />
        {project.projectName}<br />
        <span style={{ fontSize: '1rem' }}>
           {project.createdAt}
        </span>
      </h3>
      <h3 className="card-header1  p-2 m-0  " style={{color: '#655C56'}}>
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'bold',
            border: '2px solid #655C56',
            lineHeight: '1.5',
          }}
        >
          {project.projectText}
        </blockquote>
      </h3>

      <div className="my-3">
        <TikkitList tikkits={project.tikkits} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px solid #655C56', backgroundColor: "#EFFCEF" }}>
        <TikkitForm projectId={project._id} />
      </div>
    </div>
  );
};

export default SingleProject;
