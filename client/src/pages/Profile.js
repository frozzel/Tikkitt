import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProjectForm from '../components/ProjectForm';
import ProjectList from '../components/ProjectList';
import './profile.scss';

import { QUERY_USER, QUERY_ME, } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();
  
  const { loading, data } = useQuery( userParam ? QUERY_USER : QUERY_ME,  {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      {!userParam && (
          <div
          className="card-header1  p-2 m-0  " style={{color: '#655C56'}}>
            
            <ProjectForm />
          </div>
        )}
      <div className=" flex-row justify-center mb-3">
        <h4 className="col-12 col-md-10  p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your' } Projects.
        </h4>
        </div>
        <div className='container portfolio-page'>
        
        <div className="card-grid-view ">
          <ProjectList
            projects={user.projects}
            title={`${user.username}'s projects...`}
            showTitle={false}
            showUsername={false}
            
          />
          
        </div>
        </div>
        
      </div>

  );
};

export default Profile;
