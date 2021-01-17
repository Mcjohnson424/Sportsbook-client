import React from 'react';
import Logo from '../../Logo';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

export default function Brand() {
  return (
      <div className="top-bar-brand d-block"
           style={{width: '75px', paddingTop: '11px'}}>
        <Link to={ROUTES.DASHBOARD.as()}>
          <Logo height="25" color="#afc0ff"/>
        </Link>
      </div>
  );
}
