import React from 'react';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';
import '../app.scss';

import { QUERY_PROJECTS } from '../utils/queries';

const AllProjects = () => {
  const { loading, data } = useQuery(QUERY_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main>
      <div className="">
        <div
          className="col-12 col-md-10 mb-3 p-3"
         
        >
          <ProjectForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              projects={projects}
              title="Current Projects Available"
              
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default AllProjects;