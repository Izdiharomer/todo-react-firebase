import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Spinner } from 'react-bootstrap';


const Loader = () => {
  return (
      <div className="loader">
        <div variant="primary" disabled>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
          Loading...
        </div>
      </div>
  );
};

export default Loader;
