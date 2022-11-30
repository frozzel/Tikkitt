import React from 'react';

const TikkitList = ({ tikkits = [] }) => {
  if (!tikkits.length) {
    return <h3>No Tikkits Yet</h3>;
  }

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
                </h5>
                <p className="card-body">{tikkit.tikkitText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default TikkitList;
