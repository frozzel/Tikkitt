import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TIKKIT } from '../../utils/mutations';

import Auth from '../../utils/auth';

const TikkitForm = ({ projectId }) => {
  const [tikkitText, setTikkitText] = useState('');
 

  const [addTikkit] = useMutation(ADD_TIKKIT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTikkit({
        variables: {
          projectId,
          tikkitText,
          tikkitAuthor: Auth.getProfile().data.username,
        },
      });

      setTikkitText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'tikkitText' && value.length <= 280) {
      setTikkitText(value);
     
    }
  };

  return (
    <div>
      <h4>New Tikkitt Todo</h4>

      {Auth.loggedIn() ? (
        <>
       
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <input
                name="tikkitText"
                placeholder="New Tikkitt"
                value={tikkitText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <button className="btn btn-sm btn-primary " type="submit">
                Create 
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to make a tikkitt Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TikkitForm;
