import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="section-footer blue center white-text">
      <div className="row">
        <div className="col s12 m6">
          <ul>
            <li>
              <Link to="/privacy" className="white-text">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="white-text">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div className="col s12 m6">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
