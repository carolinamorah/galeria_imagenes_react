import React from "react";
import Button from 'react-bootstrap/Button';

const Footer = ({ texto, propiedad }) => {
    return (
      <div className="footer">
        <h4>
          {texto}
        </h4>
        <h6>
          {propiedad}
        </h6>
        <Button className="button" variant="btn btn-outline-light" href="#inicio">
                Go to the top
        </Button>
      </div>
    );
  };
  export default Footer;