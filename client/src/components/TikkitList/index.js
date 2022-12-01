import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_TIKKIT } from '../../utils/mutations';
import Auth from '../../utils/auth';


const TikkitList = ({ tikkits = [] }) => {
const [deleteTikkit, { error }] = useMutation(DELETE_TIKKIT);

  if (!tikkits.length) {
    return <h3>No Tikkits Yet</h3>;
  }



const handleDeleteTikkit= async (projectId) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  // try {
     await deleteTikkit({
      variables: { projectId }
    });
    // if (error) {
    //   throw new Error('something went wrong!');
    // }
  // } catch (err) {
  //   console.error(err);
  // }
};


  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px solid #655C56', color: '#655C56' }}
      >
        Tikkitt's
      </h3>
      <div className="flex-row my-4">
        {tikkits &&
          tikkits.map((tikkit) => (
            <div key={tikkit._id} className="col-12 mb-3 pb-3">
              <div className="p-3 "style={{ border: '1px solid #655C56', backgroundColor: "#655C56", color: "#EFFCEF"}}>
                <h5 className="card-header">
                  {tikkit.tikkitAuthor} <br />{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {tikkit.createdAt}
                  </span>
                  <button className="btn btn-sm btn-danger " onSubmit={ handleDeleteTikkit(tikkit._id)}>
                Delete
              </button>
                </h5>
                <p className="card-body">{tikkit.tikkitText}</p>
                <div className="col-12 col-lg-3">
                {tikkits && tikkits._id === tikkit._id &&(
                  <button className="btn btn-sm btn-primary " type="submit">
                  Create 
                </button>
                )}
              </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TikkitList;
