import React from 'react';

const NotFound = () => {
  return (
    <div className="valign-wrapper row">
      <div className="col card s10 pull-s1 m6 pull-m3 l4 pull-l4">
        <div className="card-content center">
          <h1
            style={{ marginBottom: '0', fontWeight: 'bolder' }}
            className="blue-text"
          >
            404
          </h1>
          <p
            className="flow-text"
            style={{ marginTop: '5px', marginBottom: '20px' }}
          >
            Page not Found
          </p>
          <a href="/" className="btn blue">
            Back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
